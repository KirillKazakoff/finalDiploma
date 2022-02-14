import React from 'react';
import SearchDateInput from './SearchDateInput';
import { SearchDateDir } from '../../../../types';
import { useTime } from '../../DatePicker/utils/useTime';

export default function SearchDateFrom({ onChange }: SearchDateDir) {
    const name = 'dateFrom';
    const timeObj = useTime(name);

    return (
        <SearchDateInput
            time={timeObj} name={name}
            onChange={onChange}
        />
    );
}
