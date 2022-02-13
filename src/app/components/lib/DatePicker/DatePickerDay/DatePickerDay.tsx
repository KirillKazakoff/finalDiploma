import React from 'react';

type Props = {
    children: string;
    activeDay?: string;
    cls?: string;
};

export default function DatePickerDay(props: Props) {
    const { children, cls, activeDay } = props;
    const activeCls = children === activeDay ? 'date-picker-day-active' : '';

    return (
        <li className={`date-picker-day date-picker-day-${cls} ${activeCls}`}>
            {children}
        </li>
    );
}

DatePickerDay.defaultProps = {
    cls: '',
    activeDay: '',
};
