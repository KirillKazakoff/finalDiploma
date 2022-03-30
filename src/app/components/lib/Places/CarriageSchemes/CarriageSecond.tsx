import { nanoid } from 'nanoid';
import React from 'react';
import { CarInfoT } from '../../../../types/models/modelSeats';
import CarriageScheme from './CarriageScheme';
import { mapSectionsSecond } from './mapSection';
import { useAppDispatch, useAppSelector } from '../../../../redux/reduxHooks';
import { removePlace, setPlace } from '../../../../redux/slices/placesSlice';
import CarSeat from './CarSeat';

type Props = { car: CarInfoT; route: string };
export default function CarriageSecond({ car, route }: Props) {
    const dispatch = useAppDispatch();
    const places = useAppSelector((state) => state.places.routes[route].places);

    const onClick = (e: React.SyntheticEvent) => {
        const { textContent, className } = e.currentTarget;
        const place = {
            placeNumber: +textContent,
            carNumber: car.carNumber,
        };
        const payload = { route, place };

        if (className.includes('seat-active')) {
            dispatch(removePlace(payload));
            e.currentTarget.classList.remove('carriage-seat-active');
        } else {
            e.currentTarget.classList.add('carriage-seat-active');
            dispatch(setPlace(payload));
        }
    };

    const sections = mapSectionsSecond(car, places);
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

// import { nanoid } from 'nanoid';
// import React from 'react';
// import { CarInfoT } from '../../../../types/models/modelSeats';
// import CarriageScheme from './CarriageScheme';
// import { mapSectionsSecond } from './mapSection';
// import { useAppDispatch } from '../../../../redux/reduxHooks';
// import { removePlace, setPlace } from '../../../../redux/slices/placesSlice';

// type Props = { car: CarInfoT; route: string };
// export default function CarriageSecond({ car, route }: Props) {
//     const dispatch = useAppDispatch();

//     const onClick = (e: React.SyntheticEvent) => {
//         const { textContent, className } = e.currentTarget;
//         const place = +textContent;
//         const payload = { route, place };

//         if (className.includes('seat-active')) {
//             dispatch(removePlace(payload));
//             e.currentTarget.classList.remove('seat-active');
//         } else {
//             e.currentTarget.classList.add('seat-active');
//             dispatch(setPlace(payload));
//         }
//     };

//     const { seatsInfo } = car;
//     const sections = mapSectionsSecond(seatsInfo);
//     const seatsAreas = sections.map((section) => {
//         const {
//             botLeft, topLeft, botRight, topRight,
//         } = section;

//         const seatCls = 'carriage-seat carriage-seat-top-default';
//         return (
//             <div className='carriage-section carriage-section-bordered' key={nanoid()}>
//                 <div className='carriage-seats-area'>
//                     <ul className='carriage-seats carriage-seats-left'>
//                         <li className={seatCls} onClick={onClick}>
//                             {topLeft}
//                         </li>
//                         <li className={seatCls} onClick={onClick}>
//                             {botLeft}
//                         </li>
//                     </ul>
//                     <ul className='carriage-seats carriage-seats-right'>
//                         <li className={seatCls} onClick={onClick}>
//                             {topRight}
//                         </li>
//                         <li className={seatCls} onClick={onClick}>
//                             {botRight}
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         );
//     });

//     return (
//         <CarriageScheme carNumber={car.carNumber}>
//             <div className='carriage-scheme carriage-scheme-bordered'>
//                 <div className='carriage-passageway' />
//                 <div className='carriage-bottom-cross-line' />

//                 {seatsAreas}
//             </div>
//         </CarriageScheme>
//     );
// }
