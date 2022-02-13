/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-useless-fragment */
import { nanoid } from 'nanoid';
import React from 'react';
import { OnDayClickT } from '../../../../types';

type Props = { days: string[]; activeDay?: string; onClick: OnDayClickT };

export default function AvailableList({ days, activeDay, onClick }: Props) {
    const list = days.map((day) => {
        const activeCls = day === activeDay ? 'date-picker-day-active' : '';
        return (
            <li
                key={nanoid()}
                onClick={onClick(day)}
                className={`date-picker-day ${activeCls}`}
            >
                {day}
            </li>
        );
    });
    return <>{list}</>;
}

AvailableList.defaultProps = {
    activeDay: '',
};
