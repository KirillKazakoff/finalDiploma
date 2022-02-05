import React from 'react';
import SvgCalendar from '../Svg/SvgCalendar';
import SvgLocation from '../Svg/SvgLocation';
import SvgRefresh from '../Svg/SvgRefresh';
import SearchFormBtn from './SearchFormBtn';
import InputWrapper from '../Common/InputWrapper';
import SearchFormRow from './SearchFormRow';
import SearchRowTitle from './SearchRowTitle';

export default function SearchFormMain() {
    return (
        <form className='search-form'>
            <SearchFormRow>
                <SearchRowTitle>Направление</SearchRowTitle>

                <InputWrapper>
                    <input placeholder='Откуда' />
                    <SvgLocation height={32} />
                </InputWrapper>

                <SvgRefresh height={24} />

                <InputWrapper>
                    <input placeholder='Куда' />
                    <SvgLocation height={32} />
                </InputWrapper>
            </SearchFormRow>

            <SearchFormRow>
                <SearchRowTitle>Дата</SearchRowTitle>
                <InputWrapper>
                    <input placeholder='ДД/ММ/ГГ' />
                    <SvgCalendar height={32} />
                </InputWrapper>

                <span className='space25' />

                <InputWrapper>
                    <input placeholder='ДД/ММ/ГГ' />
                    <SvgCalendar height={32} />
                </InputWrapper>
            </SearchFormRow>

            <SearchFormBtn>Найти билеты</SearchFormBtn>
        </form>
    );
}
