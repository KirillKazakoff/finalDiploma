import { DateTime } from 'luxon';

const timeR = () => {
    let current = DateTime.now();
    const dateInit = {
        ms: current.toMillis(),
        day: current.day,
        month: current.month,
        year: current.year,
    };

    const getDateString = () => {
        return current.toFormat('dd/LL/yy');
    };

    const plusMonth = () => {
        current = current.plus({ months: 1 });
    };

    const minusMonth = () => {
        if (current.month === dateInit.month) {
            console.log('it is past date bruh');
            return;
        }
        current = current.minus({ months: 1 });
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

        console.log(pastDays, availableDays);
        return { pastDays, availableDays };
    };

    const getAllDays = () => {
        const { pastMonthDays, newMonthDays } = getDaysNonMonth();
        const { pastDays, availableDays } = getDaysInMonth();

        return {
            pastMonthDays, pastDays, availableDays, newMonthDays,
        };
    };

    const getCurrentData = () => {
        const dayAmount = current.daysInMonth;

        const dateStr = getDateString();
        return { dayAmount, dateStr };
    };

    return { getCurrentData };
};

export default timeR;
