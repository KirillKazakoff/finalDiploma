import React from 'react';

type Props = { children: React.ReactNode };

export default function DatePickerMonth({ children }: Props) {
    return <span className='date-picker-month'>{children}</span>;
}
