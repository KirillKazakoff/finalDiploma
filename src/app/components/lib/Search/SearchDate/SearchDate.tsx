import React from 'react';
import SearchRowTitle from '../SearchRowTitle';
import SearchFormRow from '../SearchFormRow';
import SearchDateFrom from './SearchDateFrom';
import SearchDateTo from './SearchDateTo';

export default function SearchDate() {
    return (
        <SearchFormRow>
            <SearchRowTitle>Дата</SearchRowTitle>
            <SearchDateFrom />

            <span className='space25' />

            <SearchDateTo />
        </SearchFormRow>
    );
}
