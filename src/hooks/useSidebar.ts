import { useCallback, useEffect, useState } from "react";
import { SessionStorage } from "../services/SessionStorage";
import EventEmitterInstance, { EVENTS } from "../services/EventEmitter";

export const useSidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(Boolean(SessionStorage.get('isSidebarOpen')));

    const handleSidebarStateChange = useCallback(() => {
        const newIsSidebarOpen = SessionStorage.get('isSidebarOpen');
        setIsSidebarOpen(Boolean(newIsSidebarOpen));
    }, [])

    useEffect(() => {
        EventEmitterInstance.on(EVENTS.SIDEBAR_CHANGED, handleSidebarStateChange)
    }, []);

    return { isSidebarOpen };
}