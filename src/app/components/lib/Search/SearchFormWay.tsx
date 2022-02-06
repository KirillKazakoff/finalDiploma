import React from 'react';
import InputWrapper from '../Common/InputWrapper';
import SvgLocation from '../Svg/SvgLocation';
import SvgRefresh from '../Svg/SvgRefresh';
import SearchRowTitle from './SearchRowTitle';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import useChangeValidation from '../useChangeValidation';
import { selectWayInputs } from '../../../redux/slices/searchWaySlice';

export default function SearchFormWay() {
    const [onChange] = useChangeValidation();
    const inputs = useAppSelector(selectWayInputs);
    const { wayFrom, wayTo } = inputs;

    return (
        <>
            <SearchRowTitle>Направление</SearchRowTitle>
            <InputWrapper>
                <input
                    placeholder='Откуда'
                    name='wayFrom'
                    onChange={onChange}
                    value={wayFrom.value}
                />
                <SvgLocation height={32} />
            </InputWrapper>

            <SvgRefresh height={24} />

            <InputWrapper>
                <input placeholder='Куда' name='wayTo' />
                <SvgLocation height={32} />
            </InputWrapper>
        </>
    );
}
