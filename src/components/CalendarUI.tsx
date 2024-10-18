import { CSSProperties, useMemo } from "react";
import { CalendarHeader } from "./CalendarHeader";
import { CONSTANTS } from "../utils/Constants";
import { WeeklyCalendar } from "./WeeklyCalendar";
import { MonthlyCalendar } from "./MonthlyCalendar";
import { useParams } from "../hooks/useParams";
import { useSidebar } from "../hooks/useSidebar";
import { theme } from "../theme";

export const CalendarUI = () => {
    const { view } = useParams();

    const { isSidebarOpen } = useSidebar();

    const Calendar = useMemo(() => {
        switch (view) {
            case CONSTANTS.MONTH: return <MonthlyCalendar />
            case CONSTANTS.WEEK: return <WeeklyCalendar />
        }
    }, [view])

    return (
        <section style={{
            ...styles.calendarContainer,
            left: 0,
            width: isSidebarOpen ? `${window.innerWidth - theme.miniDayWidth * 8}px` : window.innerWidth,
        }}>
            <CalendarHeader />
            {Calendar}
        </section>
    );
};

const styles: { [key: string]: CSSProperties } = {
    calendarContainer: {
        position: 'absolute',
        transition: '0.3s ease',
        width: '100%'
    }
}
