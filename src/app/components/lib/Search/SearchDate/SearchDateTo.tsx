import React from 'react';
import { time } from '../../DatePicker/utils/time';
import { useAppSelector } from '../../../../redux/reduxHooks';
import SearchDateInput from './SearchDateInput';

export default function SearchDateTo() {
    const name = 'dateTo';
    const value = useAppSelector((state) => state.searchDate[name].value);
    const timeObj = time();

    return (
        <SearchDateInput
            value={value} time={timeObj}
            name={name}
        />
    );
}
