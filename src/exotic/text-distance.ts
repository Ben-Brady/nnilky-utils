export function getTextDistance(a: string, b: string): number {
    let distance = 0;
    const aLetters = countLetters(a);
    const bLetters = countLetters(b);

    const letters = new Set([...Object.keys(aLetters), ...Object.keys(bLetters)]);
    for (const letter of letters) {
        const aCount = aLetters[letter] ?? 0;
        const bCount = bLetters[letter] ?? 0;
        distance += Math.abs(aCount - bCount);
    }
    return distance;
}

function countLetters(string: string): Record<string, number> {
    if (typeof string === "undefined") return {};

    const letters: Record<string, number> = {};

    for (const char of Array.from(string)) {
        letters[char] ??= 0;
        letters[char] += 1;
    }
    return letters;
}
