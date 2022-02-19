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
import { OnChangeT } from '../../../../types/typesForms';

export default function SearchDate() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(
            setDateTime({ name: 'dateTo', dateTime: DateTime.now().toFormat('dd/LL/yy') }),
        );
    }, []);

    const onChangeDispatch = useChange(setInput);
    const validate = useValidateInput(setError);
    const onChange: OnChangeT = (e) => {
        onChangeDispatch(e);
        validate(e.currentTarget);
    };
    const { onBlur, onFocus } = useSelect(setActive, setBlured);

    return (
        <SearchFormRow>
            <SearchRowTitle>Дата</SearchRowTitle>
            <SearchDateTo
                onChange={onChange} onBlur={onBlur}
                onFocus={onFocus}
            />

            <span className='space25' />

            <SearchDateFrom
                onChange={onChange} onBlur={onBlur}
                onFocus={onFocus}
            />
        </SearchFormRow>
    );
}
