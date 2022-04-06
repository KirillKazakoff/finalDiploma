import React from 'react';
import PassengerSex from './PassengerSex';

type Props = { id: string };
export default function PassengerBio({ id }: Props) {
    return (
        <div className='passenger-form-row passenger-bio'>
            <PassengerSex id={id} />
            <div className='passenger-form-col passenger-form-col-birthdate'>
                <label className='passenger-input-label' htmlFor='birthdate'>
                    Дата рождения
                </label>
                <div className='passenger-input-wrapper'>
                    <input id='birthdate' className='input' />
                </div>
            </div>
        </div>
    );
}
