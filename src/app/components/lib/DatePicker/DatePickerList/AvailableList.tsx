/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-useless-fragment */
import { nanoid } from 'nanoid';
import React from 'react';
import { OnDayClickT } from '../../../../types';
import { DateT } from '../utils/timeTypes';
import isEqualDate from '../utils/isEqualDate';

type Props = {
    days: number[];
    activeDate: DateT | null;
    dateCurrent: DateT;
    onClick: OnDayClickT;
};

export default function AvailableList(props: Props) {
    const {
        days, activeDate, dateCurrent, onClick,
    } = props;

    const list = days.map((day) => {
        let activeCls;
        if (activeDate) {
            activeCls = isEqualDate(dateCurrent, activeDate, day.toString())
                ? 'date-picker-day-active'
                : '';
        }
        return (
            <li
                key={nanoid()}
                onClick={onClick(day.toString())}
                className={`date-picker-day ${activeCls}`}
            >
                {day}
            </li>
        );
    });
    return <>{list}</>;
}
