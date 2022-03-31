import React from 'react';
import { nanoid } from 'nanoid';
import { CarInfoProps } from '../../../../types/typesPlaces';
import CarriageScheme from './CarriageScheme';
import { useClickSeat } from './useClickSeat';
import { mapSectionsThird } from './mapSection/mapSectionThird';
import CarSeat from './CarSeat';

export default function CarriageThird({ car, route }: CarInfoProps) {
    const { places, onClick } = useClickSeat(car, route);
    const sections = mapSectionsThird(car, places);

    const seatClsTop = 'carriage-seat carriage-seat-top-default';
    const seatClsBot = 'carriage-seat carriage-seat-bottom';

    const seatsAreas = sections.map((section) => {
        const {
            botLeft, topLeft, botRight, topRight, seatLeft, seatRight,
        } = section;

        return (
            <div className='carriage-section carriage-section-bordered' key={nanoid()}>
                <div className='carriage-seats-area'>
                    <ul className='carriage-seats carriage-seats-left'>
                        <CarSeat
                            cls={seatClsTop} onClick={onClick}
                            place={topLeft}
                        />
                        <CarSeat
                            cls={seatClsTop} onClick={onClick}
                            place={botLeft}
                        />
                    </ul>
                    <ul className='carriage-seats carriage-seats-right'>
                        <CarSeat
                            cls={seatClsTop} onClick={onClick}
                            place={topRight}
                        />
                        <CarSeat
                            cls={seatClsTop} onClick={onClick}
                            place={botRight}
                        />
                    </ul>
                </div>
                <div className='carriage-seats-area carriage-seats-area-bottom'>
                    <ul className='carriage-seats carriage-seats-bottom'>
                        <CarSeat
                            cls={seatClsBot} onClick={onClick}
                            place={seatLeft}
                        />
                        <CarSeat
                            cls={seatClsBot} onClick={onClick}
                            place={seatRight}
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
                {seatsAreas}
            </div>
        </CarriageScheme>
    );
}
