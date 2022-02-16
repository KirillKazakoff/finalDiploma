import React from 'react';
import SvgRefresh from '../../Svg/SvgRefresh';
import SearchRowTitle from '../SearchRowTitle';
import SearchFormRow from '../SearchFormRow';
import {
    setCities,
    setInput,
    setActive,
    setBlured,
    setWayStatus,
    setError,
} from '../../../../redux/slices/searchWaySlice';
import { getCities } from '../../../../thunk/thunkApi';
import { useAppDispatch } from '../../../../redux/reduxHooks';
import SearchWayFrom from './SearchWayFrom';
import SearchWayTo from './SearchWayTo';
import inputDelay from '../../inputDelay';
import useChange from '../../../../forms/useChange';
import useSelect from '../../../../forms/useSelect';
import { OnChangeFieldT } from '../../../../forms/typesForms';
import useValidateInput from '../../../../forms/useValidateInput';

export default function SearchWay() {
    const dispatch = useAppDispatch();

    const onChangeDispatch = useChange(setInput);
    const { onFocus, onBlur } = useSelect(setActive, setBlured);
    const validate = useValidateInput(setError);
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
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                validate={validate}
            />

            <SvgRefresh height={24} />

            <SearchWayTo
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                validate={validate}
            />
        </SearchFormRow>
    );
}
