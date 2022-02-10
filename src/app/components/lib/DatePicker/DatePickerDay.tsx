import React from 'react';

type Props = {
    children: React.ReactNode;
    isPast?: boolean;
    isNonMonth?: boolean;
    isSunday?: boolean;
    isCurrent?: boolean;
};

export default function DatePickerDay(props: Props) {
    const {
        children, isPast, isNonMonth, isCurrent, isSunday,
    } = props;
    let className = 'date-picker-day';

    if (isPast) className += 'date-picker-day-past';
    if (isNonMonth) className += 'date-picker-day-non-month';
    if (isSunday) className += 'date-picker-day-sunday';
    if (isCurrent) className += 'date-picker-day-current';

    return <li className={className}>{children}</li>;
}

DatePickerDay.defaultProps = {
    isPast: false,
    isCurrent: false,
    isNonMonth: false,
    isSunday: false,
};
