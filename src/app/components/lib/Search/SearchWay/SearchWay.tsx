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
import { fetchCities } from '../../../../thunk/thunkApi';
import { useAppDispatch } from '../../../../redux/reduxHooks';
import SearchWayFrom from './SearchWayFrom';
import SearchWayTo from './SearchWayTo';
import inputDelay from '../../../../form/inputDelay';
import useChange from '../../../../form/useChange';
import useSelect from '../../../../form/useSelect';
import { OnChangeT } from '../../../../types/typesForms';
import useValidateInput from '../../../../form/useValidateInput';
import useAbortFetch from './useAbort';

export default function SearchWay() {
    const dispatch = useAppDispatch();

    const onChangeDispatch = useChange(setInput);
    const { onFocus, onBlur } = useSelect(setActive, setBlured);
    const validate = useValidateInput(setError);
    const delay = inputDelay();
    const checkCityMatch = useAbortFetch();

    const onChange: OnChangeT = (aborter) => (e) => {
        const { value, name: inputName } = e.currentTarget;

        if (!value) {
            dispatch(setCities({ cities: [], inputName }));
        } else {
            dispatch(setWayStatus({ inputName, status: 'loading' }));
            delay(() => dispatch(fetchCities(inputName, value, aborter.signal)));
        }

        onChangeDispatch(e);
    };

    return (
        <SearchFormRow>
            <SearchRowTitle>Направление</SearchRowTitle>
            <SearchWayFrom
                checkCityMatch={checkCityMatch}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                validate={validate}
            />

            <SvgRefresh height={24} />

            <SearchWayTo
                checkCityMatch={checkCityMatch}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                validate={validate}
            />
        </SearchFormRow>
    );
}
