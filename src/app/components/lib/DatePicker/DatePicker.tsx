/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import DatePickerHeader from './DatePickerHeader';
import { PickerStateT } from './utils/timeTypes';
import { TimeObjT } from './utils/time';
import DatePickerList from './DatePickerList';

type Props = { time: TimeObjT; name: string };

export default function DatePicker({ time, name }: Props) {
    const [pickerState, setPickerState] = useState<PickerStateT>(null);
    // const [activeDay, setActiveDay] = useState<number>();

    useEffect(() => {
        time.setAllDays(setPickerState);
    }, []);

    if (!pickerState) return null;
    const {
        pastMonthDays, pastDays, availableDays, newMonthDays,
    } = pickerState.days;
    const { month } = pickerState.date;

    const pastMonthDaysList = <DatePickerList days={pastMonthDays} cls='non-month' />;
    const newMonthDaysList = <DatePickerList days={newMonthDays} cls='non-month' />;
    const pastDaysList = <DatePickerList days={pastDays} cls='past' />;
    const availableDaysList = <DatePickerList days={availableDays} />;

    return (
        <div className='date-picker-container'>
            <div className='date-picker-arrow-decor' />
            <div className='date-picker'>
                <DatePickerHeader month={month} />
                <div className='date-picker-header-bottom' />
                <ul className='date-picker-content'>
                    {pastMonthDaysList}
                    {pastDaysList}
                    {availableDaysList}
                    {newMonthDaysList}
                </ul>
            </div>
        </div>
    );
}

// <button
// className='btn'
// type='button'
// style={{ color: 'white' }}
// onClick={() => time.plusMonth(setPickerState)}
// >
// PLUS
// </button>
// <button
// className='btn'
// type='button'
// style={{ color: 'white' }}
// onClick={() => time.minusMonth(setPickerState)}
// >
// MINUS
// </button>
