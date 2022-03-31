import { nanoid } from 'nanoid';
import React from 'react';
import { CarInfoProps } from '../../../../types/typesPlaces';
import CarriageScheme from './CarriageScheme';
import CarSeat from './CarSeat';
import { mapSectionsFirst } from './mapSection/mapSectionFirst';
import { useClickSeat } from './useClickSeat';

export default function CarriageFirst({ car, route }: CarInfoProps) {
    const { places, onClick } = useClickSeat(car, route);
    const sections = mapSectionsFirst(car, places);

    const seatCls = 'carriage-seat carriage-seat-top-luxe';
    const seatsAreas = sections.map((section) => {
        const { topLeft, topRight } = section;
        return (
            <div className='carriage-section carriage-section-bordered' key={nanoid()}>
                <div className='carriage-seats-area'>
                    <ul className='carriage-seats'>
                        <CarSeat
                            cls={seatCls} onClick={onClick}
                            place={topLeft}
                        />
                    </ul>
                    <ul className='carriage-seats'>
                        <CarSeat
                            cls={seatCls} onClick={onClick}
                            place={topRight}
                        />
                    </ul>
                </div>
            </div>
        );
    });

    return (
        <CarriageScheme carNumber={car.carNumber}>
            <div className='carriage-scheme carriage-scheme-bordered'>
                <div className='carriage-passageway' />
                <div className='carriage-bottom-cross-line' />
                {seatsAreas}
            </div>
        </CarriageScheme>
    );
}
