import { nanoid } from 'nanoid';
import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../redux/reduxHooks';
import {
    addPasPlace,
    PasPlaceT,
    selectPasPlacesRoute,
} from '../../../../redux/slices/pasPlacesSlice';
import { selectPassengersInfo } from '../../../../redux/slices/utils/selectPassengersFullName';
import { PersonT } from '../../../../types/models/modelPerson';
import { PlaceT } from '../../../../types/typesSlices';
import FormSelect from '../../Common/FormSelect';
import { mapDirToRoot } from '../../Places/PlacesCarTypes/mapName';
import { getFullName } from './useGetPassenger';

type Props = { place: PlaceT; dir: string; price: number };

export default function PasPlaceSelect({ place, dir, price }: Props) {
    const name = mapDirToRoot(dir);
    const dispatch = useAppDispatch();
    const passengersInfo = useAppSelector(selectPassengersInfo);
    const pasPlacesState = useAppSelector(selectPasPlacesRoute(name));

    const selected = pasPlacesState.find((pasPlace) => pasPlace.id === place.id);
    const fullname = selected ? getFullName(selected.person_info) : '';

    const onClick = (person: PersonT) => () => {
        const pasPlace: PasPlaceT = {
            price,
            person_info: person,
            seat_number: place.seat_number,
            coach_id: place.coach_id,
            id: place.id,
        };
        dispatch(addPasPlace({ name, value: pasPlace }));
        // dispatch(refresherAhh());
    };

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
