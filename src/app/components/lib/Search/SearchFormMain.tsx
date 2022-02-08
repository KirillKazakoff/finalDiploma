import React from 'react';
import SearchFormBtn from './SearchFormBtn';
import SearchFormRow from './SearchFormRow';
import SearchWay from './SearchWay/SearchWay';
import SearchFormDate from './SearchDate/SearchDateForm';
import SearchForm from './SearchForm';

export default function SearchFormMain() {
    return (
        <SearchForm>
            <SearchWay />

            <SearchFormRow>
                <SearchFormDate />
            </SearchFormRow>

            <SearchFormBtn>Найти билеты</SearchFormBtn>
        </SearchForm>
    );
}
