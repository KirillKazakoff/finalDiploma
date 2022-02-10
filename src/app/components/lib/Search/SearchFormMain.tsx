import React from 'react';
import SearchFormBtn from './SearchFormBtn';
import SearchWay from './SearchWay/SearchWay';
import SearchDate from './SearchDate/SearchDate';
import SearchForm from './SearchForm';

export default function SearchFormMain() {
    return (
        <SearchForm>
            <SearchWay />
            <SearchDate />
            <SearchFormBtn>Найти билеты</SearchFormBtn>
        </SearchForm>
    );
}
