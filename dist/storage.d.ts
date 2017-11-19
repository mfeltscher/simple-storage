export declare type SimpleStorageType = "session" | "local";
export interface StringDictionary {
    [key: string]: string;
}
export declare class SimpleStorage {
    private storageSource;
    constructor(storageType: SimpleStorageType);
    setItem(key: string, rawValue: any): void;
    getItem(key: string): any;
    removeItem(key: string): void;
    /** Remove all items from storage */
    clear(): void;
    readonly length: number;
    getAllItems(): any;
    getAllItemsAsync(): Promise<any>;
}
export declare const simpleSessionStorage: SimpleStorage;
export declare const simpleLocalStorage: SimpleStorage;