import { useEffect } from 'react';
import { DateTime } from 'luxon';
import { useAppDispatch, useAppSelector } from '../../../../redux/reduxHooks';
import { setPickerState } from '../../../../redux/slices/searchDateSlice';

export const useTime = (name: string) => {
    const dispatch = useAppDispatch();
    const dateTimeStr = useAppSelector((state) => state.searchDate[name].dateTime);

    let current = DateTime.fromFormat(dateTimeStr, 'dd/LL/yy');

    const dateInit = {
        day: current.day,
        month: current.monthLong,
        year: current.year,
    };
    const dateCurrent = { ...dateInit };

    const getDateString = (day: number) => {
        const activeDate = current.set({ day });
        const dateStr = activeDate.toFormat('dd/LL/yy');
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

        if (current.year === dateInit.year && current.monthLong === dateInit.month) {
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

    const setPicker = () => {
        const { pastMonthDays, newMonthDays } = getDaysNonMonth();
        const { pastDays, availableDays } = getDaysInMonth();

        const { year, monthLong: month, day } = current;
        const date = { year, month, day: day.toString() };
        const days = {
            pastMonthDays,
            newMonthDays,
            pastDays,
            availableDays,
        };
        const pickerState = { date, days };

        if (!current.isValid) return;
        dispatch(setPickerState({ name, pickerState }));
    };

    const plusMonth = () => {
        current = current.plus({ months: 1 });
        setPicker();
    };

    const minusMonth = () => {
        current = current.minus({ months: 1 });
        setPicker();
    };

    useEffect(() => {
        setPicker();
    }, [current]);

    return {
        dateInit,
        dateCurrent,
        getDateString,
        setPicker,
        plusMonth,
        minusMonth,
    };
};

export type TimeObjT = ReturnType<typeof useTime>;
