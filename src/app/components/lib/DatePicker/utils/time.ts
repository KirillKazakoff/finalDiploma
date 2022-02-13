import { DateTime } from 'luxon';
import { DateT, SetFuncT } from './timeTypes';

export const time = (dateTime: string) => {
    let current = DateTime.fromFormat(dateTime, 'dd/LL/yy');

    const dateInit = {
        day: current.day,
        month: current.monthLong,
        year: current.year,
    };

    const getDateString = (day: number) => {
        current = current.set({ day });
        const dateStr = current.toFormat('dd/LL/yy');
        return dateStr;
    };

    const getDaysNonMonth = () => {
        const past = current.minus({ months: 1 }); // past
        const lastWeekdayPast = past.endOf('month').weekday;
        const dayAmount = past.daysInMonth;

        const pastEnd = dayAmount;
        const pastStart = dayAmount - lastWeekdayPast + 1;

        const pastMonthDays = [];
        for (let i = pastStart; i <= pastEnd; i += 1) {
            pastMonthDays.push(i.toString());
        }

        const lastWeekday = current.endOf('month').weekday; // new
        const newEnd = 7 - lastWeekday;
        const newMonthDays = [];

        for (let i = 1; i <= newEnd; i += 1) {
            newMonthDays.push(i.toString());
        }
        return { pastMonthDays, newMonthDays };
    };

    const getDaysInMonth = () => {
        const dayAmount = current.daysInMonth;
        const pastDays = [];
        const availableDays = [];

        if (current.year === dateInit.year && current.monthLong === dateInit.month) {
            for (let i = 1; i < dateInit.day; i += 1) {
                pastDays.push(i.toString());
            }
            for (let i = dateInit.day; i <= dayAmount; i += 1) {
                availableDays.push(i.toString());
            }
        } else {
            for (let i = 1; i <= dayAmount; i += 1) {
                availableDays.push(i.toString());
            }
        }

        return { pastDays, availableDays };
    };

    const setAllDays = (setFunc: SetFuncT) => {
        const { year, monthLong: month, day } = current;
        const { pastMonthDays, newMonthDays } = getDaysNonMonth();
        const { pastDays, availableDays } = getDaysInMonth();

        setFunc({
            days: {
                pastMonthDays,
                pastDays,
                availableDays,
                newMonthDays,
            },
            date: { year, month, day: day.toString() },
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
        getDateString,
        setAllDays,
        plusMonth,
        minusMonth,
    };
};

export type TimeObjT = ReturnType<typeof time>;
