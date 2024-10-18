import { CSSProperties } from "react";
import { DateUtils } from "../utils/DateUtils";
import { theme } from "../theme";
import { useCalendar } from "../hooks/useCalendar";
import { useParams } from "../hooks/useParams";
import { CONSTANTS } from "../utils/Constants";

export const CalendarHeader = () => {
    const { weekDays } = useCalendar();
    const { view } = useParams();

    return (
        <header style={styles.header}>
            {Object.values(weekDays).map(day => {
                const isToday = DateUtils.isDateToday(new Date(day.id))
                let extraStyle: CSSProperties = {};
                if (isToday && view === CONSTANTS.WEEK) extraStyle.color = theme.blueTodayColor;

                return <div key={day.id} style={{ ...styles.dayTitle, ...extraStyle }}>{day.title}</div>
            })}
        </header>
    )
}


const styles: { [key: string]: CSSProperties } = {
    header: {
        display: 'flex',
        height: theme.monthlyCalendarHeaderHeight,
        transition: '0.3s ease',
    },
    dayTitle: {
        textAlign: 'center',
        borderRight: `1px solid ${theme.borderColor}`,
        fontSize: '12px',
        fontWeight: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        flexBasis: 0, // Add this line to allow even distribution
    }
}