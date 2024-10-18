import { CSSProperties } from "react";
import { useSidebar } from "../hooks/useSidebar";
import { MiniCalendar } from "./MiniCalendar"
import { theme } from "../theme";
import { AddTask } from "./AddTask";

export const Sidebar = () => {
    const { isSidebarOpen } = useSidebar();

    return (
        <section style={{ ...styles.container, right: isSidebarOpen ? '0px' : `-${theme.miniDayWidth * 8}px` }}>
            <AddTask />
            <MiniCalendar />
        </section>
    )
}

const styles: { [key: string]: CSSProperties } = {
    container: {
        backgroundColor: 'white',
        position: 'relative',
        transition: 'right 0.3s ease',
        paddingRight: theme.miniDayWidth / 3 * 2 + 'px',
        paddingLeft: theme.miniDayWidth / 3 + 'px',
    },
};