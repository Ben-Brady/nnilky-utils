/*#__NO_SIDE_EFFECTS__*/
export const sample = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

/*#__NO_SIDE_EFFECTS__*/
export const shuffle = <T>(array: T[]): T[] =>
    array
        .map((v) => [v, Math.random()] as const)
        .sort((a, b) => a[1] - b[1])
        .map((v) => v[0]);

/*#__NO_SIDE_EFFECTS__*/
export const randrange = (min: number, max: number) => min + Math.random() * (max - min);

/*#__NO_SIDE_EFFECTS__*/
export const randint = (min: number, max: number) => Math.floor(min + Math.random() * (max - min));

/*#__NO_SIDE_EFFECTS__*/
export const createRNG = (seed: number) => {
    const m = 2147483648;
    let current = seed % m || 1;
    return () => (current = (1103515245 /*a*/ * current + /*c*/ 12345) % m) / m;
};
