/* eslint-disable no-unneeded-ternary */
/* eslint-disable object-curly-newline */
import React from 'react';
import InputWrapper from '../../Common/InputWrapper';
import DatePicker from '../../DatePicker/DatePicker';
import DatePickerIcon from '../../DatePicker/DatePickerIcon';
import { TimeObjT } from '../../DatePicker/utils/time';

import { OnChangeFieldT } from '../../../../forms/typesForms';

type Props = {
    time: TimeObjT | null;
    value: string;
    name: string;
    onChange: OnChangeFieldT;
};

export default function SearchDateInput(props: Props) {
    const { time, value, name, onChange } = props;
    const disabled = time ? false : true;

    return (
        <InputWrapper cls='date-input-wrapper'>
            {time ? <DatePicker time={time} name={name} /> : null}
            <input
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
