import React from 'react';
import InputWrapper from '../../Common/InputWrapper';
import DatePicker from '../../DatePicker/DatePicker';
import DatePickerIcon from '../../DatePicker/DatePickerIcon';

import { useAppSelector } from '../../../../redux/reduxHooks';
import { SearchDateInputProps } from '../../../../types/typesSearch';
import Feedback from '../../Common/Feedback';

export default function SearchDateInput(props: SearchDateInputProps) {
    const {
        time, name, onChange, onFocus, onBlur,
    } = props;

    const disabled = !time;
    const dateState = useAppSelector((state) => state.searchDate[name]);

    return (
        <InputWrapper cls='search-input-wrapper'>
            {time ? <DatePicker time={time} name={name} /> : null}
            <input
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
