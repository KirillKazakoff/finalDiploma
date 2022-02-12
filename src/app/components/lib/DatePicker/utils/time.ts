import { DateTime } from 'luxon';
import { DateT, SetFuncT } from './timeTypes';

export const time = () => {
    let current = DateTime.now();

    const dateInit: DateT = {
        ms: current.toMillis(),
        day: current.day,
        month: current.monthLong,
        year: current.year,
    };
    const dateCurrent = { ...dateInit };

    const getDateString = () => {
        return current.toFormat('dd/LL/yy');
    };

    const getDaysNonMonth = () => {
        const past = current.minus({ months: 1 }); // past
        const lastWeekdayPast = past.endOf('month').weekday;
        const dayAmount = past.daysInMonth;

        const pastEnd = dayAmount;
        const pastStart = dayAmount - lastWeekdayPast + 1;

        const pastMonthDays = [];
        for (let i = pastStart; i <= pastEnd; i += 1) {
            pastMonthDays.push(i);
        }

        const lastWeekday = current.endOf('month').weekday; // new
        const newEnd = 7 - lastWeekday;
        const newMonthDays = [];

        for (let i = 1; i <= newEnd; i += 1) {
            newMonthDays.push(i);
        }
        return { pastMonthDays, newMonthDays };
    };

    const getDaysInMonth = () => {
        const dayAmount = current.daysInMonth;
        const pastDays = [];
        const availableDays = [];

        if (current.toMillis() === dateInit.ms) {
            for (let i = 1; i < dateInit.day; i += 1) {
                pastDays.push(i);
            }
            for (let i = dateInit.day; i <= dayAmount; i += 1) {
                availableDays.push(i);
            }
        } else {
            for (let i = 1; i <= dayAmount; i += 1) {
                availableDays.push(i);
            }
        }

        return { pastDays, availableDays };
    };

    const getCurrentDate = () => ({
        year: current.year,
        month: current.monthLong,
        day: current.day,
        ms: current.toMillis(),
    });

    const setAllDays = (setFunc: SetFuncT) => {
        const { pastMonthDays, newMonthDays } = getDaysNonMonth();
        const { pastDays, availableDays } = getDaysInMonth();

        setFunc({
            days: {
                pastMonthDays,
                pastDays,
                availableDays,
                newMonthDays,
            },
            date: getCurrentDate(),
        });
    };

    const plusMonth = (setFunc: SetFuncT) => {
        current = current.plus({ months: 1 });
        setAllDays(setFunc);
    };

    const minusMonth = (setFunc: SetFuncT) => {
        current = current.minus({ months: 1 });
        setAllDays(setFunc);
    };

    return {
        dateInit,
        dateCurrent,
        getDateString,
        setAllDays,
        plusMonth,
        minusMonth,
    };
};

export type TimeObjT = ReturnType<typeof time>;
