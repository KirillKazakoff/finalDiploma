import React from 'react';
import PassengerBioBirthdate from './PassengerBioBirthdate';
import PassengerBioSex from './PassengerBioSex';

type Props = { id: string };
export default function PassengerBio({ id }: Props) {
    return (
        <div className='passenger-form-row passenger-bio'>
            <PassengerBioSex id={id} />
            <PassengerBioBirthdate id={id} />
        </div>
    );
}
