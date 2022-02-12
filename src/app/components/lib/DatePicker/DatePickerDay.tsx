import React from 'react';

type Props = {
    children: React.ReactNode;
    cls?: string;
};

export default function DatePickerDay(props: Props) {
    const { children, cls } = props;

    return <li className={`date-picker-day date-picker-day-${cls}`}>{children}</li>;
}

DatePickerDay.defaultProps = {
    cls: '',
};
