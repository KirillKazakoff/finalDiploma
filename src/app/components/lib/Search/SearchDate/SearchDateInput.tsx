import React, { useEffect, useRef } from 'react';

import InputWrapper from '../../Common/InputWrapper';
import DatePicker from '../../DatePicker/DatePicker';
import DatePickerIcon from '../../DatePicker/DatePickerIcon';

import { useAppSelector } from '../../../../redux/reduxHooks';
import { SearchDateInputProps } from '../../../../types/typesSearch';
import Feedback from '../../Common/Feedback';
import { getValidityCls } from '../SearchWay/getValidityCls';
import validateDate from './validateDate';

export default function SearchDateInput(props: SearchDateInputProps) {
    const {
        time, name, onChange, onFocus, onBlur, validate, required,
    } = props;

    const dateState = useAppSelector((state) => state.searchDate[name]);
    const inputEl = useRef<HTMLInputElement>(null);
    const disabled = !time?.dateInit.month;
    const validityCls = getValidityCls(dateState);

    useEffect(() => {
        if (!inputEl.current) return;
        const input = inputEl.current;

        validateDate(input);
        validate(input);
    }, [dateState.value, disabled]);

    console.log(disabled);
    return (
        <InputWrapper cls={`search-input-wrapper input-${validityCls}`}>
            {!disabled ? <DatePicker time={time} name={name} /> : null}
            <input
                ref={inputEl}
                className='input search-input'
                disabled={disabled}
                placeholder='ДД/ММ/ГГ'
                autoComplete='off'
                name={name}
                value={dateState.value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                required={required}
            />
            <DatePickerIcon name={name} disabled={disabled} />
            <Feedback
                type='error'
                error={dateState.error}
                wasFocused={dateState.wasFocused}
            />
        </InputWrapper>
    );
}
