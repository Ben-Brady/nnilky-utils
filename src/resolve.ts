type ResolvePromiseObject<T extends Record<string, Promise<any>>> = {
    [P in keyof T]: Awaited<T[P]>;
};

export async function promiseAllObject<T extends Record<string, Promise<any>>>(
    obj: T,
): Promise<ResolvePromiseObject<T>> {
    const entries = await Promise.all(Object.entries(obj).map(async ([k, v]) => [k, await v]));
    return Object.fromEntries(entries);
}
