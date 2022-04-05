import React from 'react';

type Props = { id: string };
export default function PassengerFormBio({ id }: Props) {
    return (
        <div className='passenger-form-row passenger-bio'>
            <div className='passenger-form-col passenger-form-col-sex'>
                <label className='passenger-input-label'>Пол</label>
                <div className='passenger-input-wrapper passenger-input-wrapper-sex'>
                    <span className='sex-field'>М</span>
                    <span className='sex-field sex-field-active'>Ж</span>
                </div>
            </div>
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
