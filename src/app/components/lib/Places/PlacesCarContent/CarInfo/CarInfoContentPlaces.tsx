import React from 'react';
import { CarInfoProps } from '../../../../../types/typesPlaces';
import { mapInfoPlaces } from '../mapInfoPlaces';
import formatCost from '../../../Common/utils/format';

export default function CarInfoContentPlaces({ car }: CarInfoProps) {
    const infoPlacesArr = mapInfoPlaces(car);

    const infoPlaces = infoPlacesArr.map((info) => {
        const { cost, amount, desc } = info;
        return (
            <li className='carriage-place-info' key={desc}>
                <div className='carriage-place-info-section carriage-place-type'>
                    <div className='carriage-place-type-desc fl'>{desc}</div>
                    <div className='carriage-place-type-count'>{amount}</div>
                </div>
                <div className='carriage-place-info-section carriage-place-cost'>
                    <div className='carriage-place-cost-count'>{formatCost(cost)}</div>
                    <div className='carriage-place-cost-symbol'>Р</div>
                </div>
            </li>
        );
    });
    return <ul className='carriage-places-info'>{infoPlaces}</ul>;
}
