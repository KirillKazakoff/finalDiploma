import React from 'react';
import { CoachFeaturesT } from '../../../../../types/models/modelSeats';
import Service from './Service';

type Props = { coach: CoachFeaturesT };
export default function CarInfoContentServices({ coach }: Props) {
    const {
        wifi_price, linens_price, is_linens_included, have_air_conditioning,
    } = coach;

    const servicesArr = [
        { src: 'conditioner', isIncluded: have_air_conditioning, price: 0 },
        { src: 'wireless', isIncluded: false, price: wifi_price },
        { src: 'blanket', isIncluded: is_linens_included, price: linens_price },
    ].map((service) => <Service service={service} />);

    return (
        <div className='carriage-info-services'>
            <header className='carriage-info-content-header carriage-info-service-header'>
                <span className='carriage-info-service-desc'>Обслуживание</span>
                <span className='carriage-info-service-company'>ФПК</span>
            </header>
            <ul className='carriage-info-content-ul carriage-info-services-list'>
                <li className='carriage-info-service-item conditioner carriage-info-service-item-included'>
                    <img
                        className='filter-black'
                        width='22px'
                        src='./svg/features/conditioner.svg'
                        alt='conditioner'
                    />
                </li>
                <li className='carriage-info-service-item wireless'>
                    <img
                        className='filter-black carriage-wireless'
                        width='19px'
                        src='./svg/features/wireless.svg'
                        alt='wireless'
                    />
                </li>
                <li className='carriage-info-service-item blanket'>
                    <img
                        className='filter-black'
                        width='100%'
                        src='./svg/features/blanket.svg'
                        alt='blanket'
                    />
                </li>
                <li className='carriage-info-service-item carriage-info-service-item-choosen cup'>
                    <img
                        className='filter-white'
                        width='19px'
                        src='./svg/features/cup.svg'
                        alt='cup'
                    />
                </li>
            </ul>
        </div>
    );
}
