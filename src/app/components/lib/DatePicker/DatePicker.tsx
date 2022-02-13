/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import DatePickerHeader from './DatePickerHeader/DatePickerHeader';
import { PickerStateT, DateT } from './utils/timeTypes';
import { TimeObjT } from './utils/time';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import { changeInput, setActiveDate } from '../../../redux/slices/searchDateSlice';
import UnavailableList from './DatePickerList/UnavailableList';
import AvailableList from './DatePickerList/AvailableList';

type Props = { time: TimeObjT; name: string };

export default function DatePicker({ time, name }: Props) {
    const dispatch = useAppDispatch();
    const activeDate = useAppSelector((state) => state.searchDate[name].activeDate);
    const isPickerActive = useAppSelector(
        (state) => state.searchDate[name].isPickerActive,
    );
    const [pickerState, setPickerState] = useState<PickerStateT | null>(null);

    useEffect(() => {
        time.setAllDays(setPickerState);
    }, []);
    if (!pickerState || !isPickerActive) return null;

    const { year, month } = pickerState.date;
    const onClick = (day: string) => () => {
        const dayNumber = +day;
        const formatedDate = time.getDateString(dayNumber);

        dispatch(changeInput({ name, value: formatedDate }));
        dispatch(setActiveDate({ name, date: { day, year, month } }));
    };

    const {
        pastMonthDays, pastDays, availableDays, newMonthDays,
    } = pickerState.days;

    const pastMonthDaysList = <UnavailableList days={pastMonthDays} cls='non-month' />;
    const newMonthDaysList = <UnavailableList days={newMonthDays} cls='non-month' />;
    const pastDaysList = <UnavailableList days={pastDays} cls='past' />;
    const availableDaysList = (
        <AvailableList
            activeDate={activeDate}
            days={availableDays}
            onClick={onClick}
            dateCurrent={pickerState.date}
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
