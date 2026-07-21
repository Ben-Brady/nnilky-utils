export type EasingFunction = (p: number) => number;

/*#__NO_SIDE_EFFECTS__*/
export const alternate = (p: number) => (p < 0.5 ? p * 2 : 1 - (p - 0.5) * 2);

/*#__NO_SIDE_EFFECTS__*/
export const chain =
    (...funcs: EasingFunction[]) =>
    (p: number) =>
        funcs.reduce((p, func) => func(p), p);

/*#__NO_SIDE_EFFECTS__*/
export const linear: EasingFunction = (v) => v;

/*#__NO_SIDE_EFFECTS__*/
export const inQuad: EasingFunction = (p) => p ** 2;
/*#__NO_SIDE_EFFECTS__*/
export const inCubic: EasingFunction = (p) => p ** 3;
/*#__NO_SIDE_EFFECTS__*/
export const inQuart: EasingFunction = (p) => p ** 4;
/*#__NO_SIDE_EFFECTS__*/
export const inQuint: EasingFunction = (p) => p ** 5;

/*#__NO_SIDE_EFFECTS__*/
export const outQuad: EasingFunction = (p) => 1 - (1 - p) ** 2;
/*#__NO_SIDE_EFFECTS__*/
export const outCubic: EasingFunction = (p) => 1 - (1 - p) ** 3;
/*#__NO_SIDE_EFFECTS__*/
export const outQuart: EasingFunction = (p) => 1 - (1 - p) ** 4;
/*#__NO_SIDE_EFFECTS__*/
export const outQuint: EasingFunction = (p) => 1 - (1 - p) ** 5;

/*#__NO_SIDE_EFFECTS__*/
export const inOutQuad: EasingFunction = (p) => (p < 0.5 ? 2 * p ** 2 : 1 - (-2 * p + 2) ** 2 / 2);
/*#__NO_SIDE_EFFECTS__*/
export const inOutCubic: EasingFunction = (p) => (p < 0.5 ? 4 * p ** 3 : 1 - (-2 * p + 2) ** 3 / 2);
/*#__NO_SIDE_EFFECTS__*/
export const inOutQuart: EasingFunction = (p) => (p < 0.5 ? 8 * p ** 4 : 1 - (-2 * p + 2) ** 4 / 2);
/*#__NO_SIDE_EFFECTS__*/
export const inOutQuint: EasingFunction = (p) =>
    p < 0.5 ? 16 * p ** 5 : 1 - (-2 * p + 2) ** 5 / 2;

/*#__NO_SIDE_EFFECTS__*/
export const inSine: EasingFunction = (p) => 1 - Math.cos((p * Math.PI) / 2);
/*#__NO_SIDE_EFFECTS__*/
export const outSine: EasingFunction = (p) => Math.sin((p * Math.PI) / 2);
/*#__NO_SIDE_EFFECTS__*/
export const inOutSine: EasingFunction = (p) => -(Math.cos(Math.PI * p) - 1) / 2;

/*#__NO_SIDE_EFFECTS__*/
export const inExpo: EasingFunction = (p) => (p === 0 ? 0 : 2 ** (10 * p - 10));
/*#__NO_SIDE_EFFECTS__*/
export const outExpo: EasingFunction = (p) => (p === 1 ? 1 : 1 - 2 ** (-10 * p));
/*#__NO_SIDE_EFFECTS__*/
export const inOutExpo: EasingFunction = (p) =>
    p === 0 ? 0 : p === 1 ? 1 : p < 0.5 ? 2 ** (20 * p - 10) / 2 : (2 - 2 ** (-20 * p + 10)) / 2;

/*#__NO_SIDE_EFFECTS__*/
export const inCirc: EasingFunction = (p) => 1 - Math.sqrt(1 - p ** 2);
/*#__NO_SIDE_EFFECTS__*/
export const outCirc: EasingFunction = (p) => Math.sqrt(1 - (p - 1) ** 2);
/*#__NO_SIDE_EFFECTS__*/
export const inOutCirc: EasingFunction = (p) =>
    p < 0.5 ? (1 - Math.sqrt(1 - (2 * p) ** 2)) / 2 : (Math.sqrt(1 - (-2 * p + 2) ** 2) + 1) / 2;

const C1 = 1.70158;
const C2 = C1 * 1.525;
/*#__NO_SIDE_EFFECTS__*/
export const inBack: EasingFunction = (p) => (C1 + 1) * p * p * p - C1 * p * p;
/*#__NO_SIDE_EFFECTS__*/
export const outBack: EasingFunction = (p) => 1 + (C1 + 1) * (p - 1) ** 3 + C1 * (p - 1) ** 2;
/*#__NO_SIDE_EFFECTS__*/
export const inOutBack: EasingFunction = (p) =>
    p < 0.5
        ? ((2 * p) ** 2 * ((C2 + 1) * 2 * p - C2)) / 2
        : ((2 * p - 2) ** 2 * ((C2 + 1) * (p * 2 - 2) + C2) + 2) / 2;
