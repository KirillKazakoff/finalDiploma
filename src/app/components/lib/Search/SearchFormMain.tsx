import React from 'react';
import SearchWay from './SearchWay/SearchWay';
import SearchDate from './SearchDate/SearchDate';
import SearchForm from './SearchForm';

export default function SearchFormMain() {
    return (
        <SearchForm cls='main'>
            <div className='search-form-rows search-form-rows-main'>
                <SearchWay />
                <SearchDate />
            </div>
        </SearchForm>
    );
}
