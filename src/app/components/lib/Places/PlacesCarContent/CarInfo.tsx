import React from 'react';
import { ActiveProp } from '../../../../types/typesPlaces';
import CarActiveNumber from './CarActiveNumber';

export default function CarInfo({ active }: ActiveProp) {
    return (
        <div className='carriage-info'>
            <CarActiveNumber active={active} />
            <div className='carriage-info-content'>
                <div className='carriage-content'>
                    <div className='carriage-info-content'>
                        <div className='carriage-info-content-header'>
                            <div className='carriage-info-content-header-td carriage-places-amount-td'>
                                <span className='carriage-info-places-desc'>Места</span>
                                <span className='carriage-info-places-count'>11</span>
                            </div>
                            <div className='carriage-info-content-header-td carriage-places-cost-td'>
                                <span className='carriage-info-cost-desc'>Стоимость</span>
                            </div>
                        </div>
                        <ul className='carriage-places-info'>
                            <li className='carriage-place-info'>
                                <div className='carriage-place-info-section carriage-place-type'>
                                    <span className='carriage-place-type-desc'>
                                        Верхние
                                    </span>
                                    <span className='carriage-place-type-count'>3</span>
                                </div>
                                <div className='carriage-place-info-section carriage-place-cost'>
                                    <span className='carriage-place-cost-count'>
                                        2 920
                                    </span>
                                    <span className='carriage-place-cost-symbol'>Р</span>
                                </div>
                            </li>
                            <li className='carriage-place-info'>
                                <div className='carriage-place-info-section carriage-place-type'>
                                    <span className='carriage-place-type-desc'>
                                        Нижние
                                    </span>
                                    <span className='carriage-place-type-count'>8</span>
                                </div>
                                <div className='carriage-place-info-section carriage-place-cost'>
                                    <span className='carriage-place-cost-count'>
                                        2 920
                                    </span>
                                    <span className='carriage-place-cost-symbol'>Р</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='carriage-info-services'>
                        <header className='carriage-info-content-header carriage-info-service-header'>
                            <span className='carriage-info-service-desc'>
                                Обслуживание
                            </span>
                            <span className='carriage-info-service-company'>ФПК</span>
                        </header>
                        <ul className='carriage-info-content-ul carriage-info-services-list'>
                            <li className='carriage-info-service-item conditioner'>
                                <img
                                    className='filter-black'
                                    width='19px'
                                    src='./svg/features/conditioner.svg'
                                    alt='conditioner'
                                />
                            </li>
                            <li className='carriage-info-service-item wireless'>
                                <img
                                    className='filter-black'
                                    width='19px'
                                    src='./svg/features/wireless.svg'
                                    alt='wireless'
                                />
                            </li>
                            <li className='carriage-info-service-item blanket'>
                                <img
                                    className='filter-black'
                                    width='24px'
                                    src='./svg/features/blanket.svg'
                                    alt='blanket'
                                />
                            </li>
                            <li className='carriage-info-service-item carriage-info-service-item-active cup'>
                                <img
                                    className='filter-white'
                                    width='19px'
                                    src='./svg/features/cup.svg'
                                    alt='cup'
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
