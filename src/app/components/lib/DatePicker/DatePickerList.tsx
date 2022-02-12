/* eslint-disable react/jsx-no-useless-fragment */
import { nanoid } from 'nanoid';
import React from 'react';
import DatePickerDay from './DatePickerDay';

type Props<T> = { days: T[]; cls?: string };

export default function DatePickerList({ days, cls }: Props<any>) {
    const list = days.map((day) => (
        <DatePickerDay key={nanoid()} cls={cls}>
            {day}
        </DatePickerDay>
    ));
    return <>{list}</>;
}

DatePickerList.defaultProps = {
    cls: '',
};
