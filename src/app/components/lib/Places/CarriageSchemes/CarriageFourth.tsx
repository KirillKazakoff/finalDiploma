import React from 'react';
import { nanoid } from 'nanoid';
import { CarInfoProps } from '../../../../types/typesPlaces';
import CarriageScheme from './CarriageScheme';
import CarSeat from './CarSeat';
import { mapSectionsFourth } from './mapSection/mapSectionFourth';
import { useClickSeat } from './useClickSeat';

export default function CarriageFourth({ car, route }: CarInfoProps) {
    const { places, onClick } = useClickSeat(car, route);
    const seatGroups = mapSectionsFourth(car, places);

    const seatCls = 'carriage-seat carriage-seat-plaz';
    const seatAreas = seatGroups.map((group) => {
        const rows = group.map((row) => {
            const seats = row.map((seat) => (
                <CarSeat
                    key={nanoid()} cls={seatCls}
                    onClick={onClick} place={seat}
                />
            ));
            return (
                <ul className='carriage-seats-row' key={nanoid()}>
                    {seats}
                </ul>
            );
        });

        return (
            <div className='carriage-seats-area carriage-seats-area-plaz' key={nanoid()}>
                {rows}
            </div>
        );
    });

    return (
        <CarriageScheme carNumber={car.carNumber}>
            <div className='carriage-scheme'>
                <div className='carriage-plaz-top-border carriage-plaz-top-left-border' />
                <div className='carriage-plaz-top-border carriage-plaz-top-right-border' />
                <div className='carriage-plaz-bottom-right-border' />
                <div className='carriage-section carriage-section-plaz'>{seatAreas}</div>
            </div>
        </CarriageScheme>
    );
}
