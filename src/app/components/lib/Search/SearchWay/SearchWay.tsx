import React from 'react';
import SvgRefresh from '../../Svg/SvgRefresh';
import SearchRowTitle from '../SearchRowTitle';

import SearchFormRow from '../SearchFormRow';
import { setCities } from '../../../../redux/slices/searchWaySlice';
import { getCities } from '../../../../thunk/thunkApi';
import useChangeValidation from '../../useChangeValidation';
import useSearchFocus from './useFocus';
import { useAppDispatch } from '../../../../redux/reduxHooks';
import { OnChangeNewT } from '../../../../types';
import SearchWayFrom from './SearchWayFrom';
import SearchWayTo from './SearchWayTo';
import inputDelay from '../../inputDelay';
import validateCity from './validateCity';

export default function SearchWay() {
    const dispatch = useAppDispatch();
    const [onChangeValidate] = useChangeValidation();
    const [onBlur, onFocus] = useSearchFocus();
    const delay = inputDelay();

    const onChange: OnChangeNewT = ({ current: input }, stateCity) => () => {
        if (!input) return;
        const { value, name: inputName } = input;

        if (!value) {
            dispatch(setCities({ cities: [], inputName }));
        } else {
            delay(() => dispatch(getCities(inputName, value)));
        }

        validateCity(input, stateCity);
        onChangeValidate(input);
    };

    return (
        <SearchFormRow>
            <SearchRowTitle>Направление</SearchRowTitle>
            <SearchWayFrom
                onChange={onChange} onBlur={onBlur}
                onFocus={onFocus}
            />

            <SvgRefresh height={24} />

            <SearchWayTo
                onChange={onChange} onBlur={onBlur}
                onFocus={onFocus}
            />
        </SearchFormRow>
    );
}
