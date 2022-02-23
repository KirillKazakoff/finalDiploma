import React from 'react';
import SearchWay from './SearchWay/SearchWay';
import SearchDate from './SearchDate/SearchDate';
import SearchForm from './SearchForm';

export default function SearchFormInline() {
    return (
        <SearchForm cls='inline'>
            <SearchWay cls='search-form-row-inline' />
            <SearchDate cls='search-form-row-inline' />
        </SearchForm>
    );
}
