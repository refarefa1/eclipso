import { CalendarUI } from "./CalendarUI";
import { AppHeader } from "./AppHeader";
import { theme } from "../theme";
import { useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { AppUtils } from "../utils/AppUtils";

export const CalendarPage = () => {
    useEffect(() => {
        AppUtils.init();
    }, [])

    return <section style={styles.container}>
        <AppHeader />
        <section style={{ display: 'flex', height: '100%' }}>
            <Sidebar />
            <CalendarUI />
        </section>
    </section>
}

const styles = {
    container: {
        height: `calc(100vh - ${theme.headerHeight})`
    }
}