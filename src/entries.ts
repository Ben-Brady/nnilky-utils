export function entries<TKey extends keyof any, TVal>(object: Record<TKey, TVal>): [TKey, TVal][] {
    return Object.entries(object) as [TKey, TVal][];
}
