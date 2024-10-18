import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, getYear, getMonth, getDate, isToday } from "date-fns";
import { he } from 'date-fns/locale';
import { CONSTANTS } from "./Constants";

type Day = {
    id: number,
    date: Date,
    title: string,
    dateInMonth: string
}

const getWeekdays = (selectedDate: Date): { [key: number]: Day } => {
    const weekStart = startOfWeek(new Date(selectedDate), { locale: he });
    const weekdays: { [key: number]: Day } = {};

    for (let i = 0; i < 7; i++) {
        const currentDay = addDays(weekStart, i);
        const timestamp = currentDay.getTime();

        weekdays[timestamp] = {
            id: timestamp,
            date: currentDay,
            title: format(currentDay, 'EEE', { locale: he }),
            dateInMonth: format(currentDay, 'd'),
        };
    }

    return weekdays;
};

const getMonthDays = (selectedDate: Date): { [key: number]: Day } => {
    const start = startOfWeek(startOfMonth(new Date(selectedDate)));
    const end = endOfWeek(endOfMonth(new Date(selectedDate)));
    const monthDays: { [key: number]: Day } = {};

    let currentDay = start;

    while (currentDay <= end) {
        const timestamp = currentDay.getTime();

        monthDays[timestamp] = {
            id: timestamp,
            date: currentDay,
            title: format(currentDay, 'EEE'),
            dateInMonth: format(currentDay, 'd'),
        };

        currentDay = addDays(currentDay, 1);
    }

    return monthDays;
};

const getAllDataFromTimestamp = (timestamp: Date) => {
    return {
        year: String(getYear(timestamp)),
        month: String(getMonth(timestamp) + 1),
        day: String(getDate(timestamp)),
    }
}

const formatMonthToLocale = (currentMonth: Date, dateFormat: string) => {
    return format(currentMonth, dateFormat, { locale: he })
}

const getSelectedDateFromParams = (params: URLSearchParams) => {
    const paramYear = params.get(CONSTANTS.YEAR);
    const paramMonth = params.get(CONSTANTS.MONTH);
    const paramDay = params.get(CONSTANTS.DAY);

    if (paramYear && paramMonth) {
        return new Date(Number(paramYear), Number(paramMonth) - 1, paramDay ? Number(paramDay) : 1);
    }
    return new Date();
}

const isDateToday = (date: Date) => {
    return isToday(date);
}

export const DateUtils = {
    getWeekdays,
    getMonthDays,
    getAllDataFromTimestamp,
    formatMonthToLocale,
    getSelectedDateFromParams,
    isDateToday
}