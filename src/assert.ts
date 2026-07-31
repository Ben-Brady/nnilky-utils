class AssertionError extends Error {
    name = "AssertionError";
}

type FalsyValue = null | undefined | false | 0;
export function assert<T>(value: T, msg?: string): asserts value is Exclude<T, FalsyValue> {
    if (!value) throw new AssertionError(msg);
}
export function assertNever(msg?: string): never {
    throw new AssertionError(msg);
}

export function assertInstanceOf<T>(value: any, type: abstract new () => T): asserts value is T {
    if (!(value instanceof type)) {
        throw new AssertionError(`value was not instance of ${type}`);
    }
}
