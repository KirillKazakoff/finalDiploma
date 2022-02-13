import React from 'react';
import SearchRowTitle from '../SearchRowTitle';
import SearchFormRow from '../SearchFormRow';
import SearchDateFrom from './SearchDateFrom';
import SearchDateTo from './SearchDateTo';
import useChange from '../../../../forms/useChange';
import { changeInput } from '../../../../redux/slices/searchDateSlice';

export default function SearchDate() {
    const onChange = useChange(changeInput);

    return (
        <SearchFormRow>
            <SearchRowTitle>Дата</SearchRowTitle>
            <SearchDateFrom onChange={onChange} />

            <span className='space25' />

            <SearchDateTo onChange={onChange} />
        </SearchFormRow>
    );
}
