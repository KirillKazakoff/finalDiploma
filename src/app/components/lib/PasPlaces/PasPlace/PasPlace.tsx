/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../redux/reduxHooks';
import {
    removePasPlace,
    selectPasPlacesRoute,
} from '../../../../redux/slices/pasPlacesSlice';
import { ExtrasPricesCarT } from '../../../../types/models/modelTickets';
import { PlaceT } from '../../../../types/typesSlices';
import PasPlaceExtras from './PasPlaceExtras';
import PasPlaceHeader from './PasPlaceHeader';
import PasPlaceInfo from './PasPlaceInfo';
import PasPlaceSelect from './PasPlaceSelect';
import { mapDirToRoot } from '../../Places/PlacesCarTypes/mapName';
import { selectPassengersInfo } from '../../../../redux/slices/utils/selectPassengersInfo';
import { useSelectPassenger } from './useSelectPassenger';

type Props = { place: PlaceT; index: number; extras: ExtrasPricesCarT; dir: string };

export default function PasPlace(props: Props) {
    const dispatch = useAppDispatch();
    const {
        place, index, extras, dir,
    } = props;
    const {
        price, carNumber, seat_number, placeType,
    } = place;
    const name = mapDirToRoot(dir);

    const pasPlacesState = useAppSelector(selectPasPlacesRoute(name));
    const selected = pasPlacesState.find((pasPlace) => pasPlace.placeId === place.id);

    let totalPrice = Object.values(extras).reduce<number>((total, extraPrice) => {
        if (typeof extraPrice === 'number') total += extraPrice;
        return total;
    }, price);

    if (selected && !selected.person_info.is_adult) totalPrice /= 2;

    const passengersInfo = useAppSelector(selectPassengersInfo);
    const onSelect = useSelectPassenger(name, totalPrice, place);

    useEffect(() => {
        if (!selected) return;
        const person = passengersInfo.find((passenger) => {
            return passenger.id === selected.person_info.id;
        });
        if (!person) {
            dispatch(removePasPlace({ name, value: selected }));
        }
        onSelect(person)();
    }, [passengersInfo]);

    return (
        <li className='pas-plases-dir-item'>
            <PasPlaceHeader index={index} price={totalPrice} />
            <PasPlaceInfo carNumber={carNumber} seat_number={seat_number} />
            <PasPlaceExtras extras={extras} placeType={placeType} />
            <PasPlaceSelect
                passengersInfo={passengersInfo}
                selected={selected}
                onClick={onSelect}
            />
        </li>
    );
}
