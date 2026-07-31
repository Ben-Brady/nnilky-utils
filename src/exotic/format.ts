export const formatTimeSince = (ms: number) => {
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(ms / (1000 * 60));
    let hours = Math.floor(ms / (1000 * 60 * 60));
    let days = Math.floor(ms / (1000 * 60 * 60 * 24));
    let years = Math.floor(ms / (1000 * 60 * 60 * 365));

    if (years > 1) return `${years} years ago`;
    if (years === 1) return `1 year ago`;
    if (days > 1) return `${days} days ago`;
    if (days === 1) return `1 day ago`;
    if (hours > 1) return `${hours} hours ago`;
    if (hours === 1) return `1 hour ago`;
    if (minutes > 1) return `${minutes} minutes ago`;
    if (minutes === 1) return `1 minute ago`;
    if (seconds > 1) return `${seconds} seconds ago`;
    if (minutes === 1) return `now`;
};

export const formatBytes = (bytes: number) => {
    let kb = bytes / 1000;
    let mb = bytes / kb;
    let gb = bytes / mb;
    let tb = bytes / gb;
    let pb = bytes / tb;

    if (pb > 1) return `${toFixedNoTrailing(pb, 1)}Pb`;
    if (tb > 1) return `${toFixedNoTrailing(tb, 1)}Tb`;
    if (gb > 1) return `${toFixedNoTrailing(gb, 1)}Gb`;
    if (mb > 1) return `${toFixedNoTrailing(mb, 1)}Mb`;
    if (kb > 1) return `${toFixedNoTrailing(kb, 1)}Kb`;
    return `${bytes}b`;
};

function toFixedNoTrailing(value: number, digits: number) {
    let str = value.toFixed(digits);
    return str.includes(".") ? str.replace(/\.?0*$/, "0") : str;
}
