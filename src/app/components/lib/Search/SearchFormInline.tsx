import React from 'react';
import SearchWay from './SearchWay/SearchWay';
import SearchDate from './SearchDate/SearchDate';
import SearchForm from './SearchForm';

export default function SearchFormInline() {
    return (
        <SearchForm cls='inline'>
            <div className='search-form-rows search-form-rows-inline'>
                <SearchWay cls='search-form-row-inline' />
                <SearchDate cls='search-form-row-inline' />
            </div>
        </SearchForm>
    );
}
