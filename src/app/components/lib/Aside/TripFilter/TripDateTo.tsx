import React, { HTMLProps } from 'react';
import { useTime } from '../../DatePicker/utils/useTime';
import TripDateInput from './TripDateInput';

export default function TripDateTo({ onChange }: HTMLProps<HTMLInputElement>) {
    const name = 'dateTo';
    const timeObj = useTime(name);

    return (
        <TripDateInput
            name={name} onChange={onChange}
            time={timeObj}
        />
    );
}
