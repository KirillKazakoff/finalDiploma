/* eslint-disable no-unneeded-ternary */
/* eslint-disable object-curly-newline */
import React from 'react';
import InputWrapper from '../../Common/InputWrapper';
import DatePicker from '../../DatePicker/DatePicker';
import DatePickerIcon from '../../DatePicker/DatePickerIcon';
import { TimeObjT } from '../../DatePicker/utils/useTime';

import { OnChangeFieldT } from '../../../../forms/typesForms';
import { useAppSelector } from '../../../../redux/reduxHooks';

type Props = {
    time: TimeObjT | null;
    name: string;
    onChange: OnChangeFieldT;
};

export default function SearchDateInput(props: Props) {
    const { time, name, onChange } = props;
    const disabled = time ? false : true;
    const value = useAppSelector((state) => state.searchDate[name].value);

    return (
        <InputWrapper cls='date-input-wrapper'>
            {time ? <DatePicker time={time} name={name} /> : null}
            <input
                autoComplete='off'
                disabled={disabled}
                placeholder='ДД/ММ/ГГ'
                name={name}
                value={value}
                onChange={onChange}
            />
            <DatePickerIcon name={name} />
        </InputWrapper>
    );
}
