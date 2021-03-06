import React, { useState } from 'react';
import { useAppSelector } from '../../../../../redux/reduxHooks';
import { TripDateInputProps } from '../../../../../types/typesSearch';
import InputWrapper from '../../../Common/Form/InputWrapper';
import DatePicker from '../../../DatePicker/DatePicker';
import DatePickerIcon from '../../../DatePicker/DatePickerIcon';

export default function TripDateInput(props: TripDateInputProps) {
    const { name, onChange, time } = props;
    const { value } = useAppSelector((state) => state.searchDate[name]);
    const [isPickerActive, setPickerActive] = useState(false);

    return (
        <InputWrapper cls='filter-input-wrapper'>
            <DatePicker
                time={time}
                name={name}
                isPickerActive={isPickerActive}
                cls='filter'
            />
            <input
                placeholder='ДД/ММ/ГГ'
                className='input filter-input'
                autoComplete='off'
                onChange={onChange}
                value={value}
                name={name}
            />

            <DatePickerIcon height={22} setActive={setPickerActive} />
        </InputWrapper>
    );
}
