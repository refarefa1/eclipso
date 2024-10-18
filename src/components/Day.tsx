import { CSSProperties, useMemo } from "react"
import { theme } from "../theme";
import { DateUtils } from "../utils/DateUtils";
import { TaskList } from "./TaskList";

type DayProps = {
    id: number;
    containerStyle?: CSSProperties;
    style?: CSSProperties;
    dateInMonth: string;
    view: string;
    isSelected?: boolean;
    shouldShowTaskList?: boolean;
    onClick?: (id: number) => void;
}

export const Day = (props: DayProps) => {
    const { id, containerStyle, style, view, dateInMonth, isSelected, shouldShowTaskList, onClick } = props;

    const handleClick = () => {
        onClick?.(id)
    }

    const isToday = useMemo(() => {
        return DateUtils.isDateToday(new Date(id))
    }, [id])

    const extraStyle = useMemo(() => {
        let _extraStyle: CSSProperties = {};
        if (isSelected) {
            _extraStyle.backgroundColor = theme.lightBlueSelectedColor;
            _extraStyle.color = theme.blueSelectedColor
        }
        if (isToday) {
            _extraStyle.backgroundColor = theme.blueTodayColor;
            _extraStyle.color = 'white'
        }
        return _extraStyle;
    }, [isSelected, isToday])


    return (
        <div style={{ ...styles.dayContainer, ...containerStyle }}>
            <div style={{ ...styles.day, ...style, ...extraStyle }} onClick={handleClick} >
                {dateInMonth}
            </div>
            {shouldShowTaskList && <TaskList day={id} />}
        </div>
    )
}

const styles: { [key: string]: CSSProperties } = {
    dayContainer: {
        height: '100%',
        fontSize: '12px',
        fontWeight: 600,
    },
    day: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto'
    },
    extraDay: {
        height: '100%',
        borderRight: `1px solid ${theme.borderColor}`
    }
}
