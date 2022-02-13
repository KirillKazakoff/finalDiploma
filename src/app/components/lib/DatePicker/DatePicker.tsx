/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import DatePickerHeader from './DatePickerHeader/DatePickerHeader';
import { PickerStateT } from './utils/timeTypes';
import { TimeObjT } from './utils/time';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import { changeInput, setActiveDay } from '../../../redux/slices/searchDateSlice';
import UnavailableList from './DatePickerList/UnavailableList';
import AvailableList from './DatePickerList/AvailableList';

type Props = { time: TimeObjT; name: string };

export default function DatePicker({ time, name }: Props) {
    const dispatch = useAppDispatch();
    const activeDay = useAppSelector((state) => state.searchDate[name].activeDay);
    const [pickerState, setPickerState] = useState<PickerStateT | null>(null);

    useEffect(() => {
        time.setAllDays(setPickerState);
    }, []);

    if (!pickerState) return null;
    const {
        pastMonthDays, pastDays, availableDays, newMonthDays,
    } = pickerState.days;

    const onClickDate = (value: string) => () => {
        dispatch(changeInput({ name, value }));
        dispatch(setActiveDay({ name, day: value }));
    };

    const pastMonthDaysList = <UnavailableList days={pastMonthDays} cls='non-month' />;
    const newMonthDaysList = <UnavailableList days={newMonthDays} cls='non-month' />;
    const pastDaysList = <UnavailableList days={pastDays} cls='past' />;
    const availableDaysList = (
        <AvailableList
            activeDay={activeDay} days={availableDays}
            onClick={onClickDate}
        />
    );

    return (
        <div className='date-picker-container'>
            <div className='date-picker-arrow-decor' />
            <div className='date-picker'>
                <DatePickerHeader
                    dateCurrent={pickerState.date}
                    setFunc={setPickerState}
                    time={time}
                />
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
