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
import useCheckDisabled from './useCheckDisabled';
import { SearchSectionProps } from '../../../../types/typesSearch';

export default function SearchDate({ cls = '' }: SearchSectionProps) {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(
            setDateTime({ name: 'dateTo', dateTime: DateTime.now().toFormat('dd/LL/yy') }),
        );
    }, []);

    const onChange = useChange(setInput);
    const validate = useValidateInput(setError);
    const { onBlur, onFocus } = useSelect(setActive, setBlured);
    const { onClickCheck } = useCheckDisabled();

    return (
        <SearchFormRow cls={cls}>
            <SearchRowTitle>Дата</SearchRowTitle>
            <SearchDateTo
                onClickCheck={onClickCheck}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                validate={validate}
            />

            <span className='space25' />

            <SearchDateFrom
                onClickCheck={onClickCheck}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                validate={validate}
            />
        </SearchFormRow>
    );
}
