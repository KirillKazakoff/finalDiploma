import React from 'react';
import { TrainRouteT } from '../../../../../types/models/modelTickets';

type Props = { route: TrainRouteT };

export default function TripDetailsTrain({ route }: Props) {
    const { train, from, to } = route;

    return (
        <div className='trip-details-train'>
            <div className='trip-details-row'>
                <span className='train-number-desc'>№ Поезда</span>
                <span className='train-number train-number-details'>{train.name}</span>
            </div>
            <div className='trip-details-row trip-details-row-routes'>
                <span className='train-title-desc'>Название</span>
                <ul className='train-routes-details'>
                    <li className='train-route-details'>{from.city.name}</li>
                    <li className='train-route-details'>{to.city.name}</li>
                </ul>
            </div>
        </div>
    );
}
