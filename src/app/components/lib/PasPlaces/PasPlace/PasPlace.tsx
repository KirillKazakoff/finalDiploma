/* eslint-disable no-param-reassign */
import React from 'react';
import { ExtrasPricesCarT } from '../../../../types/models/modelTickets';
import { PlaceT } from '../../../../types/typesSlices';
import PasPlaceExtras from './PasPlaceExtras';
import PasPlaceHeader from './PasPlaceHeader';
import PasPlaceInfo from './PasPlaceInfo';
import PasPlaceSelect from './PasPlaceSelect';

type Props = { place: PlaceT; index: number; extras: ExtrasPricesCarT; dir: string };

export default function PasPlace(props: Props) {
    const {
        place, index, extras, dir,
    } = props;
    const {
        price, carNumber, seat_number, placeType,
    } = place;

    const totalPrice = Object.values(extras).reduce<number>((total, extraPrice) => {
        if (typeof extraPrice === 'number') total += extraPrice;
        return total;
    }, price);

    return (
        <li className='pas-plases-dir-item'>
            <PasPlaceHeader index={index} price={totalPrice} />
            <PasPlaceInfo carNumber={carNumber} seat_number={seat_number} />
            <PasPlaceExtras extras={extras} placeType={placeType} />
            <PasPlaceSelect
                place={place} dir={dir}
                price={totalPrice}
            />
        </li>
    );
}
