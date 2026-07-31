export function combinations<T>(arr: T[]): [T, T][] {
    const result: [T, T][] = [];
    for (const a of arr) {
        for (const b of arr) {
            if (a === b) continue;
            result.push([a, b]);
        }
    }
    return result;
}
