export function saveBlob(name: string, data: Blob | ArrayBuffer) {
    if (!(data instanceof Blob)) data = new Blob([data]);
    const url = URL.createObjectURL(data);
    downloadUrl(name, url);
    URL.revokeObjectURL(url);
}

export function downloadUrl(name: string, url: string) {
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    link.click();
    URL.revokeObjectURL(url);
}

export const requestMultiFileUpload = (accept: string = "*/*") => uploadFiles(accept, true);
export const requestFileUpload = (accept: string = "*/*") =>
    uploadFiles(accept, false).then((v) => v[0]);

function uploadFiles(accept: string = "*/*", multiple?: boolean): Promise<File[]> {
    const { promise, resolve } = Promise.withResolvers<File[]>();

    const input = document.createElement("input");
    input.type = "file";
    input.accept = accept;
    input.multiple = multiple ?? false;

    input.addEventListener("input", () => {
        if (!input.files || input.files.length === 0) return;
        resolve(Array.from(input.files));
        input.remove();
    });

    setTimeout(() => input.click());
    return promise;
}
