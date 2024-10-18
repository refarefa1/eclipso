import EventEmitterInstance, { EVENTS } from "./EventEmitter";

export class SessionStorage {
    static set<T>(key: string, value: T): void {
        try {
            const serializedValue = JSON.stringify(value);
            sessionStorage.setItem(key, serializedValue);
            EventEmitterInstance.emit(EVENTS.SIDEBAR_CHANGED);
        } catch (error) {
            console.error('Error saving to sessionStorage', error);
        }
    }

    static get<T>(key: string): T | null {
        try {
            const serializedValue = sessionStorage.getItem(key);
            if (serializedValue === null) {
                return null;
            }
            return JSON.parse(serializedValue) as T;
        } catch (error) {
            console.error('Error getting from sessionStorage', error);
            return null;
        }
    }
}