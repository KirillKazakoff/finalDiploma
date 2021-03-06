import React from 'react';
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

import { useAppDispatch } from '../../../../redux/reduxHooks';
import SearchWayFrom from './SearchWayFrom';
import SearchWayTo from './SearchWayTo';
import { OnChangeFetchT } from '../../../../types/typesForms';
import useAbortFetch from './useAbort';
import SearchWayUno from './SearchWayUno';
import { SearchSectionProps } from '../../../../types/typesSearch';
import { fetchCities } from '../../../../fetch/api/fetchCities';
import inputDelay from '../../Common/Form/inputDelay';
import useChange from '../../Common/Form/useChange';
import useSelect from '../../Common/Form/useSelect';
import useValidateInput from '../../Common/Form/useValidateInput';

export default function SearchWay({ cls = '' }: SearchSectionProps) {
    const dispatch = useAppDispatch();

    const onChangeDispatch = useChange(setInput);
    const { onFocus, onBlur } = useSelect(setActive, setBlured);
    const validate = useValidateInput(setError);
    const checkCityMatch = useAbortFetch();
    const delay = inputDelay();

    const onChange: OnChangeFetchT = (aborter) => (e) => {
        const { value, name: inputName } = e.currentTarget;

        if (!value) {
            dispatch(setCities({ cities: [], inputName }));
        } else {
            dispatch(setWayStatus({ inputName, status: 'loading' }));
            delay(() => dispatch(fetchCities(inputName, value.toLowerCase(), aborter.signal)));
        }

        onChangeDispatch(e);
    };

    return (
        <SearchFormRow cls={cls}>
            <SearchRowTitle>Направление</SearchRowTitle>
            <SearchWayFrom
                checkCityMatch={checkCityMatch}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                validate={validate}
            />

            <SearchWayUno />

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
