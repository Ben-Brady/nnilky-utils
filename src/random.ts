/*#__NO_SIDE_EFFECTS__*/
export const sample = <T>(array: T[]): T => sampleSeeded(Math.random, array);
export const sampleSeeded = <T>(rng: RNG, array: T[]): T => array[Math.floor(rng() * array.length)];

/*#__NO_SIDE_EFFECTS__*/
export const shuffle = <T>(array: T[]): T[] => shuffleSeeded(Math.random, array);
export const shuffleSeeded = <T>(rng: RNG, array: T[]): T[] =>
    array
        .map((v) => [v, rng()] as const)
        .sort((a, b) => a[1] - b[1])
        .map((v) => v[0]);

/*#__NO_SIDE_EFFECTS__*/
export const randRange = (min: number, max: number) => min + Math.random() * (max - min);
export const randRangeSeeded = (rng: RNG, min: number, max: number) => min + rng() * (max - min);

/*#__NO_SIDE_EFFECTS__*/
export const randInt = (min: number, max: number) => Math.floor(min + Math.random() * (max - min));
export const randIntSeeded = (rng: RNG, min: number, max: number) =>
    Math.floor(min + rng() * (max - min));

/*#__NO_SIDE_EFFECTS__*/
export const randBool = () => Math.random() < 0.5;
export const randBoolSeeded = (rng: RNG) => rng() < 0.5;

type RNG = () => number;
/*#__NO_SIDE_EFFECTS__*/
export const createRNG = (seed: number): (() => number) => {
    const m = 2147483648;
    let current = seed % m || 1;
    return () => (current = (1103515245 /*a*/ * current + /*c*/ 12345) % m) / m;
};
