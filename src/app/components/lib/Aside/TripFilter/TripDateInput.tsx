import React from 'react';
import DatePickerIcon from '../../DatePicker/DatePickerIcon';
import { TripDateInputProps } from '../../../../types/typesSearch';
import { useAppSelector } from '../../../../redux/reduxHooks';
import DatePicker from '../../DatePicker/DatePicker';
import InputWrapper from '../../Common/InputWrapper';

export default function TripDateInput(props: TripDateInputProps) {
    const { name, onChange, time } = props;
    const { value } = useAppSelector((state) => state.searchDate[name]);

    console.log(value);
    return (
        <InputWrapper cls='search-input-wrapper'>
            <DatePicker time={time} name={name} />
            <input
                placeholder='ДД/ММ/ГГ'
                className='input filter-input'
                autoComplete='off'
                onChange={onChange}
                value={value}
                name={name}
            />

            <DatePickerIcon name={name} height={22} />
        </InputWrapper>
    );
}
