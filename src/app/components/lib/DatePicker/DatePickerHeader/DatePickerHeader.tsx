import React from 'react';
import DatePickerArrow from './DatePickerArrow';
import DatePickerMonth from './DatePickerMonth';
import { TimeObjT } from '../utils/time';
import { SetFuncT, DateT } from '../utils/timeTypes';

type Props = {
    dateCurrent: DateT;
    setFunc: SetFuncT;
    time: TimeObjT;
};

export default function DatePickerHeader({ dateCurrent, setFunc, time }: Props) {
    const { year: yearInit, month: monthInit } = time.dateInit;
    const { year, month } = dateCurrent;

    const isLeftDisabled = year === yearInit && month === monthInit;
    const onLeftArrow = () => {
        time.minusMonth(setFunc);
    };

    const onRightArrow = () => {
        time.plusMonth(setFunc);
    };

    return (
        <header className='date-picker-header'>
            <DatePickerArrow
                disabled={isLeftDisabled}
                direction='left'
                onClick={onLeftArrow}
            />
            <DatePickerMonth>{dateCurrent.month}</DatePickerMonth>
            <DatePickerArrow direction='right' onClick={onRightArrow} />
        </header>
    );
}
