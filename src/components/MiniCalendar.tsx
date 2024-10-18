import { CSSProperties, Fragment, useMemo, useState } from "react";
import { Day } from "./Day";
import { useNavigate } from "react-router-dom";
import { CONSTANTS } from "../utils/Constants";
import { addMonths, subMonths } from "date-fns";
import { DateUtils } from "../utils/DateUtils";
import { ChevronIcon } from "../assets/scss/icons/ChevronIcon";
import { theme } from "../theme";
import { useCalendar } from "../hooks/useCalendar";
import { useParams } from "../hooks/useParams";
import { useIntl } from "../hooks/useIntl";
import { AppUtils } from "../utils/AppUtils";

export const MiniCalendar = () => {
    const { params } = useParams();
    const navigate = useNavigate();
    const intl = useIntl();

    const [currentMonth, setCurrentMonth] = useState<Date>(DateUtils.getSelectedDateFromParams(params));

    const { monthDays, selectedDate } = useCalendar({ month: currentMonth });

    const handleChooseDate = (timestamp: number) => {
        const selectedDate = new Date(timestamp);
        params.set(CONSTANTS.YEAR, selectedDate.getFullYear().toString());
        params.set(CONSTANTS.MONTH, (selectedDate.getMonth() + 1).toString());
        params.set(CONSTANTS.DAY, selectedDate.getDate().toString());

        navigate({ search: params.toString() });
    };

    const goToPreviousMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const goToNextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const monthText = useMemo(() => {
        return DateUtils.formatMonthToLocale(currentMonth, "MMMM yyyy")
    }, [currentMonth])

    const weekChunks = AppUtils.chunkArray(Object.values(monthDays), 7);

    return (
        <Fragment>
            <header style={styles.header}>
                <p>{monthText}</p>
                <div>
                    <button data-tooltip={intl.format('tooltips.previousMonth')} onClick={goToPreviousMonth} style={{ ...styles.chevron, ...styles.chevronRight }}>
                        <ChevronIcon />
                    </button>
                    <button data-tooltip={intl.format('tooltips.nextMonth')} onClick={goToNextMonth} style={styles.chevron}>
                        <ChevronIcon />
                    </button>
                </div>
            </header>
            <div>
                {weekChunks.map((week, weekIndex) => (
                    <div key={weekIndex} style={styles.weekContainer}>
                        {week.map(day => (
                            <Day
                                key={day.id}
                                id={day.id}
                                onClick={handleChooseDate}
                                dateInMonth={day.dateInMonth}
                                view={CONSTANTS.MONTH}
                                isSelected={selectedDate.getTime() === day.id}
                                containerStyle={{
                                    display: 'flex',
                                    fontWeight: 500,
                                    width: theme.miniDayWidth,
                                    height: "28px",
                                    fontSize: "10px",
                                }}
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50px',
                                    cursor: 'pointer'
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

const styles: { [key: string]: CSSProperties } = {
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '210px',
        height: '32px',
        fontSize: '14px',
        paddingRight: '6px',
    },
    weekContainer: {
        display: 'flex',
        height: '100%',
    },
    chevron: {
        height: '18px',
        paddingInline: '6px'
    },
    chevronRight: {
        rotate: '180deg'
    }
};