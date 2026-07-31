export function largestBy<T>(
    arr: T[],
    callback: (value: T) => number | undefined | null,
): T | undefined {
    return sortBy(arr, callback).at(-1);
}

export function smallestBy<T>(
    arr: T[],
    callback: (value: T) => number | undefined | null,
): T | undefined {
    return sortBy(arr, callback).at(0);
}

export function sortBy<T>(arr: T[], callback: (value: T) => number | undefined | null): T[] {
    return arr
        .map((v) => ({ value: v, rating: callback(v) ?? null }))
        .filter((v) => v.rating !== null)
        .toSorted((a, b) => a.rating! - b.rating!)
        .map((v) => v.value);
}
