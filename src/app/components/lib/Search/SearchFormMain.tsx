import React from 'react';
import SearchFormBtn from './SearchFormBtn';
import SearchWay from './SearchWay/SearchWay';
import SearchDate from './SearchDate/SearchDate';
import SearchForm from './SearchForm';
import SearchFormFeedback from './SearchFormFeedback';

export default function SearchFormMain() {
    return (
        <SearchForm>
            <SearchWay />
            <SearchDate />
            <SearchFormFeedback>
                <SearchFormBtn>Найти билеты</SearchFormBtn>
            </SearchFormFeedback>
        </SearchForm>
    );
}
