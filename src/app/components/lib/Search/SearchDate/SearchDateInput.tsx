import React from 'react';
import InputWrapper from '../../Common/InputWrapper';
import DatePicker from '../../DatePicker/DatePicker';
import DatePickerIcon from '../../DatePicker/DatePickerIcon';
import { TimeObjT } from '../../DatePicker/utils/time';
import { useAppDispatch } from '../../../../redux/reduxHooks';
import { changeInput } from '../../../../redux/slices/searchDateSlice';

type Props = { time: TimeObjT; value: string; name: string };

export default function SearchDateInput({ time, value, name }: Props) {
    const dispatch = useAppDispatch();
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { value: inputValue } = e.currentTarget;
        dispatch(changeInput({ name, value: inputValue }));
    };

    return (
        <InputWrapper cls='date-input-wrapper'>
            <DatePicker time={time} name={name} />
            <input
                placeholder='ДД/ММ/ГГ' name={name}
                value={value} onChange={onChange}
            />
            <DatePickerIcon name={name} />
        </InputWrapper>
    );
}
