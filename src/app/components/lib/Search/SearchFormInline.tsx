import React from 'react';
import InputWrapper from '../Common/InputWrapper';
import SvgLocation from '../Svg/SvgLocation';
import SearchFormRow from './SearchFormRow';
import SearchRowTitle from './SearchRowTitle';
import SvgRefresh from '../Svg/SvgRefresh';
import SvgCalendar from '../Svg/SvgCalendar';
import SearchFormBtn from './SearchFormBtn';

export default function SearchFormInline() {
    return (
        <form className='search-form-inline'>
            <SearchFormRow cls='search-form-row-inline'>
                <SearchRowTitle>Направление</SearchRowTitle>
                <InputWrapper>
                    <input placeholder='Откуда' />
                    <SvgLocation height={30} />
                </InputWrapper>

                <SvgRefresh height={24} />

                <InputWrapper>
                    <input placeholder='Куда' />
                    <SvgLocation height={30} />
                </InputWrapper>
            </SearchFormRow>

            <SearchFormRow cls='search-form-row-inline'>
                <SearchRowTitle>Дата</SearchRowTitle>
                <InputWrapper>
                    <input placeholder='ДД/ММ/ГГ' />
                    <SvgCalendar height={30} />
                </InputWrapper>
                <span className='space25' />
                <InputWrapper>
                    <input placeholder='ДД/ММ/ГГ' />
                    <SvgCalendar height={30} />
                </InputWrapper>
            </SearchFormRow>

            <SearchFormBtn cls='search-tickets-btn-inline'>
                <a href='./choose-place.html'>Найти билеты</a>
            </SearchFormBtn>
        </form>
    );
}
