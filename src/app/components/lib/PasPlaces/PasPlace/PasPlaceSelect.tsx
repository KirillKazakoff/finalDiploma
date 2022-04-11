import React from 'react';
import { PlaceT } from '../../../../types/typesSlices';
import FormSelect from '../../Common/FormSelect';

type Props = { place: PlaceT };

export default function PasPlaceSelect({ place }: Props) {
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
