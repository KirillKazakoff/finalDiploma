import React, { useEffect } from 'react';
import { DateTime } from 'luxon';
import SearchRowTitle from '../SearchRowTitle';
import SearchFormRow from '../SearchFormRow';
import SearchDateFrom from './SearchDateFrom';
import SearchDateTo from './SearchDateTo';
import useChange from '../../../../form/useChange';
import {
    setInput,
    setDateTime,
    setError,
    setActive,
    setBlured,
} from '../../../../redux/slices/searchDateSlice';
import { useAppDispatch } from '../../../../redux/reduxHooks';
import useValidateInput from '../../../../form/useValidateInput';
import useSelect from '../../../../form/useSelect';

export default function SearchDate() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(
            setDateTime({ name: 'dateTo', dateTime: DateTime.now().toFormat('dd/LL/yy') })
        );
    }, []);

    const onChange = useChange(setInput);
    const { onBlur, onFocus } = useSelect(setActive, setBlured);
    const validate = useValidateInput(setError);

    return (
        <SearchFormRow>
            <SearchRowTitle>Дата</SearchRowTitle>
            <SearchDateTo validate={validate} onChange={onChange} />

            <span className="space25" />

            <SearchDateFrom validate={validate} onChange={onChange} />
        </SearchFormRow>
    );
}
