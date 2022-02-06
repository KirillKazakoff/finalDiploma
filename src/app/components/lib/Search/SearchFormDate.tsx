import React from 'react';
import InputWrapper from '../Common/InputWrapper';
import SvgCalendar from '../Svg/SvgCalendar';
import SearchRowTitle from './SearchRowTitle';

export default function SearchFormDate() {
    return (
        <>
            <SearchRowTitle>Дата</SearchRowTitle>
            <InputWrapper>
                <input placeholder='ДД/ММ/ГГ' name='fromDate' />
                <SvgCalendar height={32} />
            </InputWrapper>

            <span className='space25' />

            <InputWrapper>
                <input placeholder='ДД/ММ/ГГ' name='toDate' />
                <SvgCalendar height={32} />
            </InputWrapper>
        </>
    );
}
