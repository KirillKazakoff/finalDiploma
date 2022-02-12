import React from 'react';
import DatePickerArrow from './DatePickerArrow';
import DatePickerMonth from './DatePickerMonth';

type Props = {
    month: string;
};

export default function DatePickerHeader({ month }: Props) {
    return (
        <header className='date-picker-header'>
            <DatePickerArrow direction='left' />
            <DatePickerMonth>{month}</DatePickerMonth>
            <DatePickerArrow direction='right' />
        </header>
    );
}
