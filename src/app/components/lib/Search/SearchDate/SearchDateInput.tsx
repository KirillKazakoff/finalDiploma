import React, { useRef } from 'react';
import InputWrapper from '../../Common/InputWrapper';
import DatePicker from '../../DatePicker/DatePicker';
import DatePickerIcon from '../../DatePicker/DatePickerIcon';

import { useAppSelector } from '../../../../redux/reduxHooks';
import { SearchDateInputProps } from '../../../../types/typesSearch';
import Input from '../../Common/Input';

export default function SearchDateInput(props: SearchDateInputProps) {
    const { time, name, onChange, onFocus, onBlur, validate } = props;
    const disabled = time ? false : true;
    const value = useAppSelector((state) => state.searchDate[name].value);

    const inputEl = useRef<HTMLInputElement>(null);

    return (
        <InputWrapper cls="search-input-wrapper">
            {time ? <DatePicker time={time} name={name} /> : null}
            <Input
                parentRef={inputEl}
                validate={validate}
                className="search-input"
                disabled={disabled}
                placeholder="ДД/ММ/ГГ"
                name={name}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                required
            />
            <DatePickerIcon name={name} />
        </InputWrapper>
    );
}
