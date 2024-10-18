import { CSSProperties } from "react";
import { CONSTANTS } from "../utils/Constants";
import { theme } from "../theme";
import { Day } from "./Day";
import { useCalendar } from "../hooks/useCalendar";
import { useSidebar } from "../hooks/useSidebar";

export const WeeklyCalendar = () => {
    const { weekDays } = useCalendar()
    const { isSidebarOpen } = useSidebar();

    return (
        <section style={styles.container}>
            {Object.values(weekDays).map(day => <Day
                key={day.id}
                id={day.id}
                view={CONSTANTS.WEEK}
                dateInMonth={day.dateInMonth || ''}
                containerStyle={{ ...styles.containerStyle, flexBasis: isSidebarOpen ? window.innerWidth - (theme.miniDayWidth * 8) / 7 : window.innerWidth / 7 }}
                style={styles.dayStyle}
                shouldShowTaskList={true}
            />)}
        </section>
    )
}

const styles: { [key: string]: CSSProperties } = {
    container: {
        position: 'relative',
        display: 'flex',
        height: `calc(100vh - ${theme.headerHeight} - ${theme.monthlyCalendarHeaderHeight})`,
        transition: '0.3s ease',
    },
    containerStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRight: `1px solid ${theme.borderColor}`,
    },
    dayStyle: {
        height: '46px',
        width: '46px',
        fontWeight: 400,
        fontSize: '25px',
        color: theme.grayTextColor,
        borderRadius: '50px'
    },
}
