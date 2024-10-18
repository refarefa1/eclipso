import { CSSProperties } from "react";
import { CONSTANTS } from "../utils/Constants";
import { theme } from "../theme";
import { Day } from "./Day";
import { useCalendar } from "../hooks/useCalendar";
import { AppUtils } from "../utils/AppUtils";

export const MonthlyCalendar = () => {
    const { monthDays } = useCalendar();

    const weekChunks = AppUtils.chunkArray(Object.values(monthDays), 7);

    return (
        <section style={styles.calendarContainer}>
            {weekChunks.map((week, weekIndex) => (
                <div key={weekIndex} style={styles.weekContainer}>
                    {week.map(day => (
                        <Day
                            key={day.id}
                            id={day.id}
                            view={CONSTANTS.MONTH}
                            dateInMonth={day.dateInMonth}
                            containerStyle={styles.containerStyle}
                            style={styles.dayStyle}
                        />
                    ))}
                </div>
            ))}
        </section>
    );
};

const styles: { [key: string]: CSSProperties } = {
    calendarContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: `calc(100vh - ${theme.headerHeight} - ${theme.monthlyCalendarHeaderHeight})`,
        transition: '0.3s ease',
    },
    weekContainer: {
        display: 'flex',
        height: '100%',
    },
    containerStyle: {
        paddingTop: '8px',
        borderBottom: `1px solid ${theme.borderColor}`,
        borderRight: `1px solid ${theme.borderColor}`,
        flexGrow: 1
    },
    dayStyle: {
        height: '24px',
        width: '24px',
        margin: 'auto',
        borderRadius: '50px',
        fontWeight: 500,
    },
}
