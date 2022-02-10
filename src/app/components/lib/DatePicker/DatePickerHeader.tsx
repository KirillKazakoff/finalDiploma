import React from 'react';
import DatePickerArrow from './DatePickerArrow';
import DatePickerMonth from './DatePickerMonth';

export default function DatePickerHeader() {
    return (
        <header className='date-picker-header'>
            <DatePickerArrow direction='left' />
            <DatePickerMonth>Август</DatePickerMonth>
            <DatePickerArrow direction='right' />
        </header>
    );
}
