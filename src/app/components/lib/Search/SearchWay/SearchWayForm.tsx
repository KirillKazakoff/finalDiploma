import React from 'react';
import InputWrapper from '../../Common/InputWrapper';
import SvgLocation from '../../Svg/SvgLocation';
import SvgRefresh from '../../Svg/SvgRefresh';
import SearchRowTitle from '../SearchRowTitle';
import { useAppDispatch, useAppSelector } from '../../../../redux/reduxHooks';
import useChangeValidation from '../../useChangeValidation';
import { selectWayInputs } from '../../../../redux/slices/searchWaySlice';
import { getCities } from '../../../../thunk/thunkApi';
import SearchWayFrom from './SearchWayInput';

export default function SearchFormWay() {
    const dispatch = useAppDispatch();
    const [onChangeValidate] = useChangeValidation();
    const inputs = useAppSelector(selectWayInputs);
    const { wayFrom } = inputs;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(getCities(e.currentTarget.name, e.currentTarget.value));
        onChangeValidate(e);
    };

    return (
        <>
            <SearchRowTitle>Направление</SearchRowTitle>
            <InputWrapper>
                <SearchWayFrom onChange={onChange} wayState={wayFrom} />
                <SvgLocation height={32} />
            </InputWrapper>

            <SvgRefresh height={24} />

            <InputWrapper>
                <input
                    placeholder='Куда' name='wayTo'
                    required
                />
                <SvgLocation height={32} />
            </InputWrapper>
        </>
    );
}
