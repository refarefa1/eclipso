import { useMemo } from "react";
import { DateUtils } from "../utils/DateUtils";
import { CONSTANTS } from "../utils/Constants";
import { useParams } from "./useParams";
import { TaskService } from "../services/TaskService";

type useCalendarProps = {
    timestamp?: number;
    month?: Date;
}

export const useCalendar = (props: useCalendarProps = {}) => {
    const { timestamp, month } = props;

    const { params } = useParams();

    const selectedDate = useMemo(() => {
        return DateUtils.getSelectedDateFromParams(params)
    }, [params.get(CONSTANTS.YEAR), params.get(CONSTANTS.MONTH), params.get(CONSTANTS.DAY)]);

    const weekDays = useMemo(() => {
        return DateUtils.getWeekdays(selectedDate)
    }, [selectedDate])

    const monthDays = useMemo(() => {
        return DateUtils.getMonthDays(month || selectedDate);
    }, [selectedDate, month]);


    const isToday = useMemo(() => {
        if (typeof timestamp !== 'number') return false;

        return DateUtils.isDateToday(new Date(timestamp))
    }, [timestamp])

    const tasks = useMemo(() => {
        return TaskService.getTasks({ timestamp });
    }, [timestamp])

    return { selectedDate, monthDays, weekDays, isToday, tasks };
}