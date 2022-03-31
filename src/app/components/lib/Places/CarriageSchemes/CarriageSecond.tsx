import { nanoid } from 'nanoid';
import React from 'react';
import { CarInfoProps } from '../../../../types/typesPlaces';
import CarriageScheme from './CarriageScheme';
import CarSeat from './CarSeat';
import { useClickSeat } from './useClickSeat';
import { mapSectionsSecond } from './mapSection/mapSectionSecond';

export default function CarriageSecond({ car, route }: CarInfoProps) {
    const { places, onClick } = useClickSeat(car, route);
    const sections = mapSectionsSecond(car, places);

    const seatCls = 'carriage-seat carriage-seat-top-default';
    const seatsAreas = sections.map((section) => {
        const {
            botLeft, topLeft, botRight, topRight,
        } = section;

        return (
            <div className='carriage-section carriage-section-bordered' key={nanoid()}>
                <div className='carriage-seats-area'>
                    <ul className='carriage-seats carriage-seats-left'>
                        <CarSeat
                            cls={seatCls} onClick={onClick}
                            place={topLeft}
                        />
                        <CarSeat
                            cls={seatCls} onClick={onClick}
                            place={botLeft}
                        />
                    </ul>
                    <ul className='carriage-seats carriage-seats-right'>
                        <CarSeat
                            cls={seatCls} onClick={onClick}
                            place={topRight}
                        />
                        <CarSeat
                            cls={seatCls} onClick={onClick}
                            place={botRight}
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
