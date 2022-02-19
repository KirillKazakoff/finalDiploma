import React, { useEffect, useRef } from 'react';

import InputWrapper from '../../Common/InputWrapper';
import DatePicker from '../../DatePicker/DatePicker';
import DatePickerIcon from '../../DatePicker/DatePickerIcon';

import { useAppSelector } from '../../../../redux/reduxHooks';
import { SearchDateInputProps } from '../../../../types/typesSearch';
import Feedback from '../../Common/Feedback';
import { getValidityCls } from '../SearchWay/getValidityCls';

export default function SearchDateInput(props: SearchDateInputProps) {
    const {
        time, name, onChange, onFocus, onBlur, validate,
    } = props;

    const dateState = useAppSelector((state) => state.searchDate[name]);
    const inputEl = useRef<HTMLInputElement>(null);
    const disabled = !time;
    const validityCls = getValidityCls(dateState);

    useEffect(() => {
        if (!inputEl.current) return;
        const input = inputEl.current;

        validate(input);
    }, [dateState.value]);

    return (
        <InputWrapper cls={`search-input-wrapper input-${validityCls}`}>
            {time ? <DatePicker time={time} name={name} /> : null}
            <input
                ref={inputEl}
                className='search-input'
                disabled={disabled}
                placeholder='ДД/ММ/ГГ'
                name={name}
                value={dateState.value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                pattern='[0-9]{2}\/[0-9]{2}\/[0-9]{2}'
                required
            />
            <DatePickerIcon name={name} />
            <Feedback
                type='error'
                error={dateState.error}
                wasFocused={dateState.wasFocused}
            />
        </InputWrapper>
    );
}
