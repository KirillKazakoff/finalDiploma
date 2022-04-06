/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PassengerFormAge from './PassengerFormAge';
import PassengerFormFullName from './PassengerFullName/PassengerFullName';
import PassengerFormCheckboxes from './PassengerFormCheckboxes';
import PassengerBio from './PassengerBio/PassengerBio';

type Props = { id: string };
export default function PassengerFormPerson({ id }: Props) {
    return (
        <section className='passenger-form-section framed-passenger-section passenger-main-data'>
            <PassengerFormAge id={id} />
            <PassengerFormFullName id={id} />
            <PassengerBio id={id} />
            <PassengerFormCheckboxes id={id} />
        </section>
    );
}
