import React from 'react';
import InputWrapper from '../../Common/InputWrapper';
import SvgCalendar from '../../Svg/SvgCalendar';
import SearchRowTitle from '../SearchRowTitle';
import SearchFormRow from '../SearchFormRow';
import DatePicker from '../../DatePicker/DatePicker';

export default function SearchDate() {
    return (
        <SearchFormRow>
            <SearchRowTitle>Дата</SearchRowTitle>
            <InputWrapper cls='date-input-wrapper'>
                <DatePicker />
                <input placeholder='ДД/ММ/ГГ' name='fromDate' />
                <SvgCalendar height={32} />
            </InputWrapper>

            <span className='space25' />

            <InputWrapper>
                <input placeholder='ДД/ММ/ГГ' name='toDate' />
                <SvgCalendar height={32} />
            </InputWrapper>
        </SearchFormRow>
    );
}
