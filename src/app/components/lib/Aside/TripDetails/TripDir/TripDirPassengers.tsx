/* eslint-disable no-param-reassign */
import React from 'react';
import { PasPlaceT } from '../../../../../redux/slices/pasPlacesSlice';
import SubtleContainerPassengers from '../TripPassengers/SubtleContainerPassengers';

type Props = { pasPlaces: PasPlaceT[] };

type AgeInfoT = {
    amount: number;
    price: number;
};

const initAgeInfo: AgeInfoT = {
    amount: 0,
    price: 0,
};

type PlacesAgeInfoT = {
    adult: AgeInfoT;
    microPeople: AgeInfoT;
};
const initAgeCategories: PlacesAgeInfoT = {
    adult: { ...initAgeInfo },
    microPeople: { ...initAgeInfo },
};

export default function TripDirPassengers({ pasPlaces }: Props) {
    // console.log(pasPlaces);
    if (!pasPlaces) return null;

    const ageCategories = pasPlaces.reduce<PlacesAgeInfoT>((total, pasPlace) => {
        if (pasPlace.person_info.is_adult) {
            total.adult.amount += 1;
            total.adult.price += pasPlace.price;
        } else {
            total.microPeople.amount += 1;
            total.microPeople.price += pasPlace.price;
        }

        return total;
    }, initAgeCategories);

    const matchCategory = (key: string) => {
        switch (key) {
            case 'adult':
                return 'Взрослых';

            case 'microPeople':
                return 'Детей';

            default:
                return '';
        }
    };

    const passengersInfoList = Object.entries(ageCategories).map(([key, category]) => {
        const categoryName = matchCategory(key);
        const { amount, price } = category;

        return (
            <div className='trip-details-row trip-details-row-passengers' key={key}>
                <span className='details-person-age'>{`${amount} ${categoryName}`}</span>
                <div className='details-cost-count-container'>
                    <span className='details-cost-count'>{price}</span>
                    <span className='details-cost-money-symbol'>₽</span>
                </div>
            </div>
        );
    });

    return (
        <div className='trip-details-passengers-wrapper'>
            <SubtleContainerPassengers desc='Пассажиры' />
            <div className='trip-details-passengers'>{passengersInfoList}</div>
        </div>
    );
}
