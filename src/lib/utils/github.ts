import { Octokit } from '@octokit/core';
import type { GetGitHubReposQuery } from '@/generated/graphql';
import { capitalCase, pascalCaseTransformMerge, sentenceCase } from 'text-case';

export async function getGithubRepos() {
	const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

	const query = /* GraphQL */ `
		query GetGitHubRepos {
			viewer {
				# All public repos you own
				repositories(
					first: 20
					affiliations: [OWNER]
					privacy: PUBLIC
					orderBy: { field: CREATED_AT, direction: DESC }
				) {
					nodes {
						name
						description
						url
						owner {
							login
						}
						homepageUrl
						primaryLanguage {
							name
						}
						repositoryTopics(first: 10) {
							nodes {
								topic {
									name
								}
							}
						}
					}
					pageInfo {
						endCursor
						hasNextPage
					}
				}

				# All public repos you’ve contributed to (not owned)
				repositoriesContributedTo(first: 20, privacy: PUBLIC) {
					nodes {
						name
						description
						url
						homepageUrl
						collaborators {
							nodes {
								login
							}
						}
						primaryLanguage {
							name
						}
						repositoryTopics(first: 10) {
							nodes {
								topic {
									name
								}
							}
						}
					}
					pageInfo {
						endCursor
						hasNextPage
					}
				}
			}
		}
	`;

	const data = await octokit.graphql<GetGitHubReposQuery>(query);

	const myRepos = data.viewer.repositories?.nodes?.filter(
		(rn) =>
			rn?.owner.login === 'abotica' &&
			rn?.repositoryTopics?.nodes?.some(
				(tn) => tn?.topic.name === 'on-my-portfolio'
			)
	);

	const myReposFlattened = myRepos?.map((rn) => ({
		title: capitalCase(rn?.name as string),
		description: sentenceCase(rn?.description as string) || null,
		githubUrl: rn?.url as string,
		liveUrl: rn?.homepageUrl as string | null,
		technologies:
			(rn?.repositoryTopics?.nodes
				?.map((tn) => tn?.topic.name)
				.filter((t) => t !== 'on-my-portfolio' && Boolean(t)) as string[]) ||
			[],
		language: rn?.primaryLanguage?.name.replace(' ', '') as string | null
	}));

	const collaboratedReposFlattened =
		data.viewer.repositoriesContributedTo?.nodes?.map((rn) => ({
			title: capitalCase(rn?.name as string),
			description: sentenceCase(rn?.description as string) || null,
			githubUrl: rn?.url as string,
			liveUrl: rn?.homepageUrl as string | null,
			technologies:
				(rn?.repositoryTopics?.nodes
					?.map((tn) => tn?.topic.name)
					.filter(Boolean) as string[]) || [],
			language: rn?.primaryLanguage?.name.replace(' ', '') as string | null
		}));


	return {
		myReposFlattened,
		collaboratedReposFlattened,
	};
}
