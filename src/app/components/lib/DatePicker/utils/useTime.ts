import { DateTime } from 'luxon';
import { useState, useEffect } from 'react';

type DaysT = {
    pastMonthDays: number[];
    pastDays: number[];
    availableDays: number[];
    newMonthDays: number[];
};

const useTime = () => {
    const [current, setCurrent] = useState(DateTime.now());
    const [days, setDays] = useState<DaysT>();
    const dateInit = {
        ms: current.toMillis(),
        day: current.day,
        month: current.month,
        year: current.year,
    };

    // const getCurrentData = () => {
    //     const dayAmount = current.daysInMonth;

    //     const dateStr = getDateString();
    //     return { dayAmount, dateStr };
    // };

    // const getDateString = () => {
    //     return current.toFormat('dd/LL/yy');
    // };

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

    const getAllDays = () => {
        const { pastMonthDays, newMonthDays } = getDaysNonMonth();
        const { pastDays, availableDays } = getDaysInMonth();

        setDays({
            pastMonthDays,
            pastDays,
            availableDays,
            newMonthDays,
        });
    };

    const plusMonth = () => {
        setCurrent(current.plus({ months: 1 }));
        getAllDays();
    };

    const minusMonth = () => {
        if (current.month === dateInit.month) {
            console.log('it is past date bruh');
            return;
        }
        setCurrent(current.minus({ months: 1 }));
        getAllDays();
    };

    return {
        days,
        current,
        plusMonth,
        minusMonth,
        getAllDays,
    };
};

export default useTime;
