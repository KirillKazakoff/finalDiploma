import React from 'react';
import SearchFormBtn from './SearchFormBtn';
import SearchFormRow from './SearchFormRow';
import SearchFormWay from './SearchWay/SearchWayForm';
import SearchFormDate from './SearchDate/SearchDateForm';

export default function SearchFormMain() {
    return (
        <form className='search-form'>
            <SearchFormRow>
                <SearchFormWay />
            </SearchFormRow>

            <SearchFormRow>
                <SearchFormDate />
            </SearchFormRow>

            <SearchFormBtn>Найти билеты</SearchFormBtn>
        </form>
    );
}
