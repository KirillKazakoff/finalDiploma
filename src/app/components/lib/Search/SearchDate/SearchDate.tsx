import React from 'react';
import { DateTime } from 'luxon';
import SearchRowTitle from '../SearchRowTitle';
import SearchFormRow from '../SearchFormRow';
import SearchDateFrom from './SearchDateFrom';
import SearchDateTo from './SearchDateTo';
import useChange from '../../../../forms/useChange';
import { changeInput, setDateTime } from '../../../../redux/slices/searchDateSlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/reduxHooks';

export default function SearchDate() {
    const dispatch = useAppDispatch();
    const dateTimeFrom = useAppSelector((state) => state.searchDate.dateFrom.dateTime);
    const dateTimeTo = useAppSelector((state) => state.searchDate.dateTo.dateTime);

    const onChange = useChange(changeInput);
    if (!dateTimeTo) {
        dispatch(
            setDateTime({ name: 'dateTo', dateTime: DateTime.now().toFormat('dd/LL/yy') }),
        );
        return null;
    }

    return (
        <SearchFormRow>
            <SearchRowTitle>Дата</SearchRowTitle>
            <SearchDateTo onChange={onChange} dateTime={dateTimeTo} />

            <span className='space25' />

            <SearchDateFrom onChange={onChange} dateTime={dateTimeFrom} />
        </SearchFormRow>
    );
}
