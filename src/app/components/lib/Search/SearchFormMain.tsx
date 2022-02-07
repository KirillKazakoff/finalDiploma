import React from 'react';
import SearchFormBtn from './SearchFormBtn';
import SearchFormRow from './SearchFormRow';
import SearchWay from './SearchWay/SearchWay';
import SearchFormDate from './SearchDate/SearchDateForm';

export default function SearchFormMain() {
    return (
        <form className='search-form'>
            <SearchWay />

            <SearchFormRow>
                <SearchFormDate />
            </SearchFormRow>

            <SearchFormBtn>Найти билеты</SearchFormBtn>
        </form>
    );
}
