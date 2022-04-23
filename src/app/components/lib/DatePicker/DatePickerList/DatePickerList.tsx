/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-useless-fragment */
import { nanoid } from 'nanoid';
import React from 'react';
import { OnDayClickT } from '../../../../types/typesSearch';

type Props = {
    days: number[];
    cls?: string;
    activeDay?: string;
    onClick?: OnDayClickT | null;
};

export default function DatePickerList(props: Props) {
    const {
        days, cls, activeDay, onClick,
    } = props;

    const list = days.map((day) => {
        const activeCls = day.toString() === activeDay ? 'date-picker-day-active' : '';
        return (
            <li
                key={nanoid()}
                onClick={onClick ? onClick(day.toString()) : undefined}
                className={`date-picker-day date-picker-day-${cls} ${activeCls}`}
            >
                {day}
            </li>
        );
    });
    return <>{list}</>;
}

DatePickerList.defaultProps = {
    cls: '',
    activeDay: '',
    onClick: null,
};
