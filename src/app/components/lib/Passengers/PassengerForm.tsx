/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { PassengerFormT } from '../../../types/models/modelPerson';
import SubmitBtn from './PassengerFormCheckBtn';
import PassengerFormDocument from './PassengerFormDocument/PassengerFormDocument';
import PassengerFormFeedback from './PassengerFormFeedback';
import PassengerFormPerson from './PassengerFormPerson';
import SubtleForm from './SubtlePassengerForm/SubtlePassengerForm';

type Props = { id: string; index: number; form: PassengerFormT };
export default function PassengerForm({ id, index, form }: Props) {
    console.log(form);
    return (
        <SubtleForm index={index}>
            <PassengerFormPerson id={id} />
            <PassengerFormDocument id={id} />

            <PassengerFormFeedback id={id}>
                <SubmitBtn />
            </PassengerFormFeedback>
        </SubtleForm>
    );
}
