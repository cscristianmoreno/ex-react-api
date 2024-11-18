export abstract class LocalStorageUtil {

    public static getLocalStorage(value: string): string | null {
        const item: string | null = localStorage.getItem(value);
        return item;
    }

    public static setLocalSorage(key: string, value: string): void {
        localStorage.setItem(key, value);
    }
}