/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PassengerSubtledHeader from './PassengerSubtledHeader/PassengerSubtledHeader';
import SubmitBtn from './PassengerFormCheckBtn';
import PassengerFormDocument from './PassengerFormDocument/PassengerFormDocument';
import PassengerFormFeedback from './PassengerFormFeedback';
import PassengerFormPerson from './PassengerFormPerson/PassengerFormPerson';

type Props = { id: string; index: number };
export default function PassengerForm({ id, index }: Props) {
    return (
        <PassengerSubtledHeader index={index} id={id}>
            <PassengerFormPerson id={id} />
            <PassengerFormDocument id={id} />

            <PassengerFormFeedback id={id}>
                <SubmitBtn />
            </PassengerFormFeedback>
        </PassengerSubtledHeader>
    );
}
