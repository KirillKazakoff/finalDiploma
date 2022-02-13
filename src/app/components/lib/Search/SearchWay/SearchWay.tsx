import React from 'react';
import SvgRefresh from '../../Svg/SvgRefresh';
import SearchRowTitle from '../SearchRowTitle';
import SearchFormRow from '../SearchFormRow';
import {
    setCities,
    changeInput,
    setActive,
    setBlured,
    setWayStatus,
} from '../../../../redux/slices/searchWaySlice';
import { getCities } from '../../../../thunk/thunkApi';
import { useAppDispatch } from '../../../../redux/reduxHooks';
import { OnChangeNewT } from '../../../../types';
import SearchWayFrom from './SearchWayFrom';
import SearchWayTo from './SearchWayTo';
import inputDelay from '../../inputDelay';
import useChange from '../../../../forms/useChange';
import useSelect from '../../../../forms/useSelect';
import { OnChangeFieldT } from '../../../../forms/typesForms';

export default function SearchWay() {
    const dispatch = useAppDispatch();

    const onChangeDispatch = useChange(changeInput);
    const { onFocus, onBlur } = useSelect(setActive, setBlured);

    const delay = inputDelay();

    const onChange: OnChangeFieldT = (e) => {
        const { value, name: inputName } = e.currentTarget;

        if (!value) {
            dispatch(setCities({ cities: [], inputName }));
        } else {
            dispatch(setWayStatus({ inputName, status: 'loading' }));
            delay(() => dispatch(getCities(inputName, value)));
        }

        onChangeDispatch(e);
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
