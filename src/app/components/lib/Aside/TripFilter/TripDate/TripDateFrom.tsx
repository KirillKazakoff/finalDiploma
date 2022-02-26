import React, { HTMLProps } from 'react';
import { useTime } from '../../../DatePicker/utils/useTime';
import TripDateInput from './TripDateInput';

export default function TripDateFrom({ onChange }: HTMLProps<HTMLInputElement>) {
    const name = 'dateFrom';
    const timeObj = useTime(name);

    return (
        <TripDateInput
            name={name} onChange={onChange}
            time={timeObj}
        />
    );
}
