/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import DatePickerHeader from './DatePickerHeader';
import { PickerStateT } from './utils/timeTypes';
import { TimeObjT } from './utils/time';
import DatePickerList from './DatePickerList';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import { changeInput, setActiveDay } from '../../../redux/slices/searchDateSlice';

type Props = { time: TimeObjT; name: string };

export default function DatePicker({ time, name }: Props) {
    const dispatch = useAppDispatch();
    const activeDay = useAppSelector((state) => state.searchDate[name].activeDay);
    const [pickerState, setPickerState] = useState<PickerStateT>(null);

    console.log(activeDay);

    useEffect(() => {
        time.setAllDays(setPickerState);
    }, []);

    const onClick = (value: string) => () => {
        dispatch(changeInput({ name, value }));
        dispatch(setActiveDay({ name, day: value }));
    };

    if (!pickerState) return null;
    const {
        pastMonthDays, pastDays, availableDays, newMonthDays,
    } = pickerState.days;
    const { month } = pickerState.date;

    const pastMonthDaysList = <DatePickerList days={pastMonthDays} cls='non-month' />;
    const newMonthDaysList = <DatePickerList days={newMonthDays} cls='non-month' />;
    const pastDaysList = <DatePickerList days={pastDays} cls='past' />;
    const availableDaysList = (
        <DatePickerList
            activeDay={activeDay} days={availableDays}
            onClick={onClick}
        />
    );

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
