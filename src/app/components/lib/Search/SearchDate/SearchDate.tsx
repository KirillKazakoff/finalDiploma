import React, { useEffect } from 'react';
import { DateTime } from 'luxon';
import SearchRowTitle from '../SearchRowTitle';
import SearchFormRow from '../SearchFormRow';
import SearchDateFrom from './SearchDateFrom';
import SearchDateTo from './SearchDateTo';
import useChange from '../../../../form/useChange';
import {
    setInput,
    setDateTime,
    setError,
    setActive,
    setBlured,
} from '../../../../redux/slices/searchDateSlice';

import { useAppDispatch } from '../../../../redux/reduxHooks';
import useValidateInput from '../../../../form/useValidateInput';
import useSelect from '../../../../form/useSelect';

export default function SearchDate() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(
            setDateTime({ name: 'dateTo', dateTime: DateTime.now().toFormat('dd/LL/yy') }),
        );
    }, []);

    const onChange = useChange(setInput);
    const validate = useValidateInput(setError);
    const { onBlur, onFocus } = useSelect(setActive, setBlured);

    return (
        <SearchFormRow>
            <SearchRowTitle>Дата</SearchRowTitle>
            <SearchDateTo
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                validate={validate}
            />

            <span className='space25' />

            <SearchDateFrom
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                validate={validate}
            />
        </SearchFormRow>
    );
}
