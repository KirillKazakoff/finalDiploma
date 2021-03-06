import React from 'react';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectPassengersInfo } from '../../../redux/slices/utils/selectPassengersInfo';
import CheckChangeNavBtn from './CheckChangeNavBtn';
import { getFullName } from '../PasPlaces/PasPlace/getFullName';
import { matchGender } from '../Passengers/PassengerForm/PassengerFormPerson/PassengerBio/matchGender';
import { selectTotalPrice } from '../../../redux/slices/utils/selectTotalPrice';
import formatCost from '../Common/utils/format';
import { matchAge } from '../Passengers/PassengerForm/PassengerFormPerson/PassengerAge/matchAge';

export default function CheckPassengers() {
    const passengers = useAppSelector(selectPassengersInfo);
    const totalPrice = useAppSelector(selectTotalPrice);

    if (totalPrice === 0) return null;

    const passengersList = passengers.map((passenger) => {
        const fullName = getFullName(passenger);
        const gender = matchGender(passenger.gender);
        const ageType = matchAge(passenger.is_adult, passenger.id);

        return (
            <li className='confirmation-list-row' key={passenger.id}>
                <div className='confirmation-list-col'>
                    <img
                        height='68px' src='./svg/ava-default.svg'
                        alt='avatar'
                    />
                    <span className='confirmation-passenger-desc'>{ageType}</span>
                </div>
                <div className='confirmation-list-col'>
                    <span className='confirmation-passenger-title'>{fullName}</span>
                    <ul className='confirmation-passenger-details'>
                        <li className='confirmation-passenger-detail'>{`Пол ${gender}`}</li>
                        <li className='confirmation-passenger-detail'>
                            {`Дата рождения ${passenger.birthday}`}
                        </li>
                        <li className='confirmation-passenger-detail'>
                            {`${
                                passenger.document_type
                            } ${passenger.document_data.toUpperCase()}`}
                        </li>
                    </ul>
                </div>
            </li>
        );
    });

    return (
        <section className='confirmation-section shadowed'>
            <header className='passenger-header confirmation-passenger-header framed-passengers'>
                <span className='passenger-desc'>Пассажиры</span>
            </header>

            <div className='confirmation-container'>
                <ul className='confirmation-list'>{passengersList}</ul>
                <div className='confirmation-change confirmation-total'>
                    <div className='confirmation-total-cost'>
                        <span className='confirmation-total-cost-desc'>Всего</span>
                        <div className='cost-count-container cost-count-container-confirmation'>
                            <span className='cost-count cost-count-confirmation'>
                                {formatCost(totalPrice)}
                            </span>
                            <span className='cost-money-symbol cost-money-symbol-confirmation'>
                                ₽
                            </span>
                        </div>
                    </div>
                    <CheckChangeNavBtn to='/passengers' desc='Изменить' />
                </div>
            </div>
        </section>
    );
}
