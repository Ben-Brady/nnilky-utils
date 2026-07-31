import { easing } from "../index.js";

export function animate(options: {
    callback: (p: number) => void;
    duration: number;
    signal?: AbortSignal;
    start?: number;
    loop?: boolean;
    easing?: easing.EasingFunction;
}) {
    const { callback, start, duration, loop, signal } = options;
    const easingFunc = options.easing ?? easing.linear;

    let ended = false;
    let elapsed = start ?? 0;

    let lastFrame = performance.now();
    requestAnimationFrame(function update(time) {
        if (ended) return;
        if (signal?.aborted) return;

        let dt = time - lastFrame;
        lastFrame = time;
        elapsed += dt;
        let p = elapsed / duration;

        if (loop) {
            p %= 1;
        } else {
            p = Math.min(1, elapsed / duration);
            ended = p === 1;
        }

        callback(easingFunc(p));
        requestAnimationFrame(update);
    });
}
