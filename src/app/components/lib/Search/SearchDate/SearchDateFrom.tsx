import React from 'react';
import SearchDateInput from './SearchDateInput';

import { useTime } from '../../DatePicker/utils/useTime';
import { SearchDateDir } from '../../../../types/typesSearch';

export default function SearchDateFrom(props: SearchDateDir) {
    const {
        onChange, onFocus, onBlur, validate, onClickCheck,
    } = props;
    const name = 'dateFrom';
    const timeObj = useTime(name);

    return (
        <SearchDateInput
            onClickCheck={onClickCheck}
            validate={validate}
            time={timeObj}
            name={name}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
}
