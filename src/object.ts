export function objEntries<TKey extends keyof any, TVal>(
    object: Record<TKey, TVal>,
): [TKey, TVal][] {
    return Object.entries(object) as [TKey, TVal][];
}

/** @deprecated Use `objEntries` instead*/
export function entries<TKey extends keyof any, TVal>(object: Record<TKey, TVal>): [TKey, TVal][] {
    return Object.entries(object) as [TKey, TVal][];
}

export function objKeys<TKey extends keyof any>(object: Record<TKey, any>): TKey[] {
    return Object.keys(object) as TKey[];
}

export function objValues<TVal>(object: Record<any, TVal>): TVal[] {
    return Object.values(object) as TVal[];
}
