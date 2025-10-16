export const capitalizeEachWord = (str: string): string => {
    const trimmedString: string = str.trim();
	const substrings: string[] = trimmedString.split(' ');

	const capitalizedStrings: string[] = substrings.map(substr => {
        const firstCharacter = substr[0];
        const restOfString = substr.slice(1);

        return firstCharacter.toUpperCase() + restOfString.toLowerCase();
})

	return capitalizedStrings.join(" ");
}
