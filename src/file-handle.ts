export async function getOPFSHandle(name: string) {
    const directory = await navigator.storage.getDirectory();
    const handle = await directory.getFileHandle(name, { create: true });
    return wrapFileHandle(handle);
}

export type MountFileHandleOptions = {
    id?: string;
    accept?: string;
};

export const CAN_MOUNT_FILE = "showOpenFilePicker" in window;
export async function mountFileHandle(options?: MountFileHandleOptions) {
    if (!("showOpenFilePicker" in window)) throw new Error("Not available");
    const showOpenFilePicker = window.showOpenFilePicker as (
        options?: MountFileHandleOptions,
    ) => Promise<FileSystemFileHandle[]>;

    const handles = await showOpenFilePicker(options);
    return wrapFileHandle(handles[0]);
}

export type FileHandle = ReturnType<typeof wrapFileHandle>;
export function wrapFileHandle(handle: FileSystemFileHandle) {
    async function write(data: ArrayBuffer) {
        const writer = await handle.createWritable({ keepExistingData: false });
        await writer.write(data);
        await writer.close();
    }

    async function read(): Promise<ArrayBuffer> {
        const file = await handle.getFile();
        return await file.arrayBuffer();
    }

    return { read, write, handle };
}
