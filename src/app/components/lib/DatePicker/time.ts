/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { DateTime, DayNumbers, MonthNumbers } from 'luxon';

export default class Time {
    current: DateTime;

    dateInit: {
        ms: number;
        day: DayNumbers;
        month: MonthNumbers;
        year: number;
    };

    data: {
        dateStr: null | string;
        dayData: {
            oldStart: null | number;
            oldEnd: null | number;
            dayAmount: null | number;
        };
    };

    constructor() {
        this.current = DateTime.now();

        this.dateInit = {
            ms: this.current.toMillis(),
            day: this.current.day,
            month: this.current.month,
            year: this.current.year,
        };

        this.data = {
            dateStr: null,
            dayData: {
                oldStart: null,
                oldEnd: null,
                dayAmount: null,
            },
        };

        this.getData();
    }

    getDateString() {
        return this.current.toLocaleString({
            year: 'numeric',
            month: 'long',
        });
    }

    getPreviousData() {
        this.current = this.current.minus({ months: 1 });

        const lastWeekday = this.current.endOf('month').weekday;
        const dayAmount = this.current.daysInMonth;
        const { dayData } = this.data;

        dayData.oldEnd = dayAmount;
        dayData.oldStart = dayAmount - lastWeekday + 1;
        console.log(dayData);

        this.current = this.current.plus({ month: 1 });
    }

    getCurrentData() {
        this.data.dayData.dayAmount = this.current.daysInMonth;
        this.data.dateStr = this.getDateString();
    }

    getData() {
        this.getCurrentData();
        this.getPreviousData();
    }

    plusMonth() {
        this.current = this.current.plus({ month: 1 });
        this.getData();
    }

    minusMonth() {
        if (this.current.month === this.dateInit.month) {
            console.log('it is past date bruh');
            return;
        }
        this.current = this.current.minus({ months: 1 });
        this.getData();
    }

    checkInitDate() {
        if (this.current.toMillis() === this.dateInit.ms) {
            return this.dateInit;
        }
        return false;
    }

    getMonthEnd() {
        return this.current.endOf('month').toMillis();
    }
}
