/* eslint-disable react/jsx-no-useless-fragment */
import { nanoid } from 'nanoid';
import React from 'react';

type Props = { days: string[]; cls: string };

export default function UnavailableList({ days, cls }: Props) {
    const list = days.map((day) => (
        <li key={nanoid()} className={`date-picker-day date-picker-day-${cls}`}>
            {day}
        </li>
    ));
    return <>{list}</>;
}
