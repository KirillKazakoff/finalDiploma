import React from 'react';
import FormSelect from '../../Common/FormSelect';

export default function PasPlaceSelect() {
    const onClick = (name: string) => () => console.log('hello');

    const optionsList = ['Люда Людмиловна Милая', 'Гена Геншин Импакт'].map((name) => (
        <li
            className='option option-pas-places' key={name}
            onClick={onClick(name)}
        >
            {name}
        </li>
    ));

    return (
        <FormSelect cls='pas-places' selected='Генадий Гнидо Гнидус'>
            {optionsList}
        </FormSelect>
    );
}
