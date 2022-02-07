import React from 'react';
import InputWrapper from '../../Common/InputWrapper';
import SvgLocation from '../../Svg/SvgLocation';
import SvgRefresh from '../../Svg/SvgRefresh';
import SearchRowTitle from '../SearchRowTitle';

import SearchWayInput from './SearchWayInput';
import SearchFormRow from '../SearchFormRow';
import { setCities } from '../../../../redux/slices/searchWaySlice';
import { getCities } from '../../../../thunk/thunkApi';
import useChangeValidation from '../../useChangeValidation';
import useSearchFocus from './useFocus';
import { useAppDispatch } from '../../../../redux/reduxHooks';
import { OnChangeNewT } from '../../../../types';
import SearchWayFrom from './SearchWayFrom';

export default function SearchWay() {
    const dispatch = useAppDispatch();
    const [onChangeValidate] = useChangeValidation();
    const [onBlur, onFocus] = useSearchFocus();

    const onChange: OnChangeNewT = (inputEl) => () => {
        if (!inputEl.current) return;
        const { value, name: inputName } = inputEl.current;

        onChangeValidate(inputEl.current);
        if (!value) {
            dispatch(setCities({ cities: [], inputName }));
        } else {
            dispatch(getCities(inputName, value));
        }
    };

    return (
        <SearchFormRow>
            <SearchRowTitle>Направление</SearchRowTitle>
            <SearchWayFrom
                onChange={onChange} onBlur={onBlur}
                onFocus={onFocus}
            />

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
