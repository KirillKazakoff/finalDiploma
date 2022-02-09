import React from 'react';
import SvgRefresh from '../../Svg/SvgRefresh';
import SearchRowTitle from '../SearchRowTitle';
import SearchFormRow from '../SearchFormRow';
import {
    setCities,
    changeInput,
    setActive,
    setBlured,
} from '../../../../redux/slices/searchWaySlice';
import { getCities } from '../../../../thunk/thunkApi';
import useForm from '../../../../forms/useForm';
import { useAppDispatch } from '../../../../redux/reduxHooks';
import { OnChangeNewT } from '../../../../types';
import SearchWayFrom from './SearchWayFrom';
import SearchWayTo from './SearchWayTo';
import inputDelay from '../../inputDelay';
import validateCity from './validateCity';

export default function SearchWay() {
    const dispatch = useAppDispatch();
    const {
        onChange: onChangeDispatch,
        onFocus,
        onBlur,
    } = useForm(changeInput, setActive, setBlured);

    const delay = inputDelay();

    const onChange: OnChangeNewT = ({ current: input }, stateCity) => () => {
        if (!input) return;
        const { value, name: inputName } = input;

        if (!value) {
            dispatch(setCities({ cities: [], inputName }));
        } else {
            delay(() => dispatch(getCities(inputName, value)));
        }

        onChangeDispatch(input);
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
