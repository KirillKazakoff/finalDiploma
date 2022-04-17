/* eslint-disable no-param-reassign */
import React from 'react';
import { PasPlaceT } from '../../../../../redux/slices/pasPlacesSlice';
import SubtleContainerPassengers from './SubtleContainerPassengers';
import { getAgeCategories, matchCategory } from './getAgeCategories';
import formatCost from '../../../Common/utils/format';

type Props = { pasPlaces: PasPlaceT[] };

export default function TripDirPassengers({ pasPlaces }: Props) {
    const ageCategories = getAgeCategories(pasPlaces);

    const passengersInfoList = Object.entries(ageCategories).map(([key, category]) => {
        const categoryName = matchCategory(key);
        const { amount, price } = category;

        if (amount === 0) return null;
        return (
            <div className='trip-details-row trip-details-row-passengers' key={key}>
                <span className='details-person-age'>{`${amount} ${categoryName}`}</span>
                <div className='details-cost-count-container'>
                    <span className='details-cost-count'>{formatCost(price)}</span>
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
