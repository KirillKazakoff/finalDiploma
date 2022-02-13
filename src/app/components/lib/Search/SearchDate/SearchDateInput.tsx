/* eslint-disable object-curly-newline */
import React from 'react';
import InputWrapper from '../../Common/InputWrapper';
import DatePicker from '../../DatePicker/DatePicker';
import DatePickerIcon from '../../DatePicker/DatePickerIcon';
import { TimeObjT } from '../../DatePicker/utils/time';

import { SearchDateDir } from '../../../../types';

type Props = { time: TimeObjT; value: string; name: string } & SearchDateDir;

export default function SearchDateInput(props: Props) {
    const { time, value, name, onChange } = props;
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
