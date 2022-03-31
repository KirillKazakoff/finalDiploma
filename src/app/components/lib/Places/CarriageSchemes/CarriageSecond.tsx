import { nanoid } from 'nanoid';
import React from 'react';
import { CarInfoProps } from '../../../../types/typesPlaces';
import CarriageScheme from './CarriageScheme';
import CarSeat from './CarSeat';
import { useClickSeat } from './useClickSeat';

export default function CarriageSecond({ car, route }: CarInfoProps) {
    const { sections, onClick } = useClickSeat(car, route);

    const seatsAreas = sections.map((section) => {
        const {
            botLeft, topLeft, botRight, topRight,
        } = section;

        const seatCls = 'carriage-seat carriage-seat-top-default';
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
