type Listener = (...args: any[]) => void;

export const EVENTS = {
    SIDEBAR_CHANGED: 'SIDEBAR_CHANGED',
    WINDOW_RESIZE: 'WINDOW_RESIZE'
}

export class EventEmitter {
    private events: Record<string, Listener[]> = {};

    on(event: string, listener: Listener): void {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    off(event: string, listenerToRemove: Listener): void {
        if (!this.events[event]) return;

        this.events[event] = this.events[event].filter(listener => listener !== listenerToRemove);
    }

    emit(event: string, ...args: any[]): void {
        if (!this.events[event]) return;

        this.events[event].forEach(listener => listener(...args));
    }

    once(event: string, listener: Listener): void {
        const onceWrapper = (...args: any[]) => {
            listener(...args);
            this.off(event, onceWrapper);
        };

        this.on(event, onceWrapper);
    }
}

const EventEmitterInstance = new EventEmitter();
export default EventEmitterInstance