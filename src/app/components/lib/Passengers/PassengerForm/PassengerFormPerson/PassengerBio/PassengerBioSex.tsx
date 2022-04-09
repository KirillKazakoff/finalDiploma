/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { getValidityCls } from '../../../../../../form/getValidityCls';
import { useAppSelector } from '../../../../../../redux/reduxHooks';
import {
    selectMsgHidden,
    selectField,
} from '../../../../../../redux/slices/passengersSlice';
import { IdProp } from '../../../../../../types/typesPassengers';
import Feedback from '../../../../Common/Feedback';
import InputWrapper from '../../../../Common/InputWrapper';
import { useSetError } from '../../../useSetError';
import { useSetInput } from '../../../useSetInput';

export default function PassengerBioSex({ id }: IdProp) {
    const name = 'gender';
    const isFormMsgHidden = useAppSelector(selectMsgHidden(id));
    const boxState = useAppSelector(selectField(id, name));
    const { error, wasFocused, formError } = boxState;

    const setError = useSetError(id, name);
    const setInput = useSetInput(id, name);
    const onClick = (value: string) => () => {
        setInput(value);
        setError('');
    };

    const genders = ['М', 'Ж'].map((value) => {
        const cls = boxState.value === value ? 'sex-field-active' : '';
        return (
            <span
                key={value} onClick={onClick(value)}
                className={`sex-field ${cls}`}
            >
                {value}
            </span>
        );
    });

    const validityCls = getValidityCls(boxState);

    return (
        <div className='passenger-form-col passenger-form-col-sex '>
            <label className='passenger-input-label'>Пол</label>
            <InputWrapper
                cls={`passenger-input-wrapper passenger-input-wrapper-sex input-${validityCls}`}
            >
                {genders}
                <Feedback
                    error={error}
                    formError={formError}
                    wasFocused={wasFocused}
                    isFormMsgHidden={isFormMsgHidden}
                />
            </InputWrapper>
        </div>
    );
}
