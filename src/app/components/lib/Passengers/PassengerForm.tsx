/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PassengerFormCheck from './PassengerFormCheck';
import PassengerFormDocument from './PassengerFormDocument/PassengerFormDocument';
import PassengerFormPerson from './PassengerFormPerson';
import SubtleForm from './SubtlePassengerForm/SubtlePassengerForm';

type Props = { id: string; index: number };
export default function PassengerForm({ id, index }: Props) {
    return (
        <SubtleForm index={index}>
            <PassengerFormPerson />
            <PassengerFormDocument id={id} />
            <PassengerFormCheck />
        </SubtleForm>
    );
}
