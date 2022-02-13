import React from 'react';
import { time } from '../../DatePicker/utils/time';
import { useAppSelector } from '../../../../redux/reduxHooks';
import SearchDateInput from './SearchDateInput';
import { SearchDateDir } from '../../../../types';

export default function SearchDateFrom({ onChange, dateTime }: SearchDateDir) {
    const name = 'dateFrom';
    const value = useAppSelector((state) => state.searchDate[name].value);
    const timeObj = dateTime ? time(dateTime) : null;

    return (
        <SearchDateInput
            value={value} time={timeObj}
            name={name} onChange={onChange}
        />
    );
}
