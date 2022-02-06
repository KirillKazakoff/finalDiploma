import React from 'react';
import InputWrapper from '../Common/InputWrapper';
import SvgLocation from '../Svg/SvgLocation';
import SvgRefresh from '../Svg/SvgRefresh';
import SearchRowTitle from './SearchRowTitle';

export default function SearchFormWay() {
    return (
        <>
            <SearchRowTitle>Направление</SearchRowTitle>
            <InputWrapper>
                <input placeholder='Откуда' name='fromCity' />
                <SvgLocation height={32} />
            </InputWrapper>

            <SvgRefresh height={24} />

            <InputWrapper>
                <input placeholder='Куда' name='toCity' />
                <SvgLocation height={32} />
            </InputWrapper>
        </>
    );
}
