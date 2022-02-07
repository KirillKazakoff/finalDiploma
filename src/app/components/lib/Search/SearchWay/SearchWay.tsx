import React from 'react';
import InputWrapper from '../../Common/InputWrapper';
import SvgLocation from '../../Svg/SvgLocation';
import SvgRefresh from '../../Svg/SvgRefresh';
import SearchRowTitle from '../SearchRowTitle';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectWayInputs } from '../../../../redux/slices/searchWaySlice';

import SearchWayInput from './SearchWayInput';
import SearchFormRow from '../SearchFormRow';

export default function SearchWay() {
    const inputs = useAppSelector(selectWayInputs);
    const { wayFrom } = inputs;

    return (
        <SearchFormRow>
            <SearchRowTitle>Направление</SearchRowTitle>
            <SearchWayInput
                wayState={wayFrom} name='wayFrom'
                placeholder='Откуда'
            >
                <SvgLocation height={32} />
            </SearchWayInput>

            <SvgRefresh height={24} />

            <InputWrapper>
                <input
                    placeholder='Куда' name='wayTo'
                    required
                />
                <SvgLocation height={32} />
            </InputWrapper>
        </SearchFormRow>
    );
}
