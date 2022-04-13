import { nanoid } from 'nanoid';
import React from 'react';
import { PasPlaceT } from '../../../../redux/slices/pasPlacesSlice';
import { PersonT } from '../../../../types/models/modelPerson';
import FormSelect from '../../Common/FormSelect/FormSelect';
import { getFullName } from './getFullName';

type Props = {
    selected: PasPlaceT;
    passengersInfo: PersonT[];
    onClick: (person: PersonT) => () => void;
};

export default function PasPlaceSelect(props: Props) {
    const { selected, passengersInfo, onClick } = props;

    const fullname = selected ? getFullName(selected.person_info) : '';

    const newOptionsList = passengersInfo.map((passenger) => {
        return (
            <li
                className='option option-pas-places'
                key={nanoid()}
                onClick={onClick(passenger)}
            >
                {getFullName(passenger)}
            </li>
        );
    });

    return (
        <FormSelect cls='pas-places' selected={fullname}>
            {newOptionsList}
        </FormSelect>
    );
}
