import React, { useEffect } from 'react';
import { DateTime } from 'luxon';
import SearchRowTitle from '../SearchRowTitle';
import SearchFormRow from '../SearchFormRow';
import SearchDateFrom from './SearchDateFrom';
import SearchDateTo from './SearchDateTo';
import useChange from '../../../../forms/useChange';
import { setInput, setDateTime } from '../../../../redux/slices/searchDateSlice';
import { useAppDispatch } from '../../../../redux/reduxHooks';
import useValidateInput from '../../../../forms/useValidateInput';

export default function SearchDate() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(
            setDateTime({ name: 'dateTo', dateTime: DateTime.now().toFormat('dd/LL/yy') }),
        );
    }, []);

    const onChange = useChange(setInput);
    // const validate = useValidateInput();

    return (
        <SearchFormRow>
            <SearchRowTitle>Дата</SearchRowTitle>
            <SearchDateTo onChange={onChange} />

            <span className='space25' />

            <SearchDateFrom onChange={onChange} />
        </SearchFormRow>
    );
}
