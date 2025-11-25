import type { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://api.github.com/graphql': {
        headers: {
          Authorization: 'Bearer ' + process.env.GITHUB_TOKEN,
          'User-Agent': 'NextJS-App'
        },
      },
    },
  ],
  documents: "src/**/*.{ts,tsx}",
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        {
          add: {
            content: '/* eslint-disable */'
          }
        },
        "typescript",
        "typescript-operations"
      ],
      config: {
        skipTypename: true,
      }
    }
  }
};

export default config;