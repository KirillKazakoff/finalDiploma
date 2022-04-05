/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PassengerFormAge from './PassengerFormPerson/PassengerFormAge';
import PassengerFormBio from './PassengerFormPerson/PassengerFormBio';
import PassengerFormFullName from './PassengerFormPerson/PassengerFullName/PassengerFullName';
import PassengerFormCheckboxes from './PassengerFormPerson/PassengerFormCheckboxes';

type Props = { id: string };
export default function PassengerFormPerson({ id }: Props) {
    return (
        <section className='passenger-form-section framed-passenger-section passenger-main-data'>
            <PassengerFormAge id={id} />
            <PassengerFormFullName id={id} />
            <PassengerFormBio id={id} />
            <PassengerFormCheckboxes id={id} />
        </section>
    );
}
