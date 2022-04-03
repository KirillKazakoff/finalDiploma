/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PassengerFormCheck from './PassengerFormCheck';
import PassengerFormDocument from './PassengerFormDocument';
import PassengerFormPerson from './PassengerFormPerson';
import SubtleForm from './SubtlePassengerForm/SubtlePassengerForm';

type Props = { index: number };
export default function PassengerForm({ index }: Props) {
    return (
        <SubtleForm index={index}>
            <PassengerFormPerson />
            <PassengerFormDocument />
            <PassengerFormCheck />
        </SubtleForm>
    );
}
