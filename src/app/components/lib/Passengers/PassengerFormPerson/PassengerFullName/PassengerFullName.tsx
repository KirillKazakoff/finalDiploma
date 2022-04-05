import React from 'react';
import FullNameInput from './FullNameInput';

type Props = { id: string };
export default function PassengerFullName({ id }: Props) {
    return (
        <div className='passenger-form-row passenger-fullname'>
            <FullNameInput
                name='last_name' label='Фамилия'
                id={id}
            />
            <FullNameInput
                name='first_name' label='Имя'
                id={id}
            />
            <FullNameInput
                name='patronymic' label='Отчество'
                id={id}
            />
        </div>
    );
}
