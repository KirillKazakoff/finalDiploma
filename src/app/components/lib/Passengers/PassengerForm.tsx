/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import SubmitBtn from './PassengerFormCheckBtn';
import PassengerFormDocument from './PassengerFormDocument/PassengerFormDocument';
import PassengerFormFeedback from './PassengerFormFeedback';
import PassengerFormPerson from './PassengerFormPerson';
import SubtleForm from './SubtlePassengerForm/SubtlePassengerForm';

type Props = { id: string; index: number };
export default function PassengerForm({ id, index }: Props) {
    return (
        <SubtleForm index={index} id={id}>
            <PassengerFormPerson id={id} />
            <PassengerFormDocument id={id} />

            <PassengerFormFeedback id={id}>
                <SubmitBtn />
            </PassengerFormFeedback>
        </SubtleForm>
    );
}
