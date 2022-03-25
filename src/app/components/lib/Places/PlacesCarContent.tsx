import React from 'react';
import CarriageFirst from './CarriageSchemes/CarriageFirst';
import CarriageFourth from './CarriageSchemes/CarriageFourth';
import CarriageSecond from './CarriageSchemes/CarriageSecond';
import CarriageThird from './CarriageSchemes/CarriageThird';

export default function PlacesCarContent() {
    return (
        <section className='places-section places-section-carriages'>
            <header className='carriages-header framed-places'>
                <div className='carriages-numeration'>
                    <span className='carriages-numeration-title'>Вагоны</span>
                    <ul className='carriages-numeration-counts'>
                        <li className='carriages-numeration-count cariages-numeration-count-active'>
                            07
                        </li>
                        <li className='carriages-numeration-count'>09</li>
                    </ul>
                </div>
                <span className='carriages-header-desc'>
                    Нумерация вагонов начинается с головы поезда
                </span>
            </header>
            <div className='carriage-info'>
                <div className='carriage-info-number framed-places'>
                    <div className='carriage-info-number-wrapper'>
                        <div className='carriage-info-number-count'>07</div>
                        <div className='carriage-info-number-desc'>вагон</div>
                    </div>
                </div>
                <div className='carriage-info-content'>
                    <div className='carriage-info-content-col carriage-info-places'>
                        <header className='carriage-info-content-header carriage-info-places-header'>
                            <span className='carriage-info-places-desc'>Места</span>
                            <span className='carriage-info-places-count'>11</span>
                        </header>
                        <ul className='carriage-info-content-ul carriage-info-places-types'>
                            <li className='carriage-info-places-type'>
                                <span className='carriage-info-places-type-desc'>
                                    Верхние
                                </span>
                                <span className='carriage-info-places-type-count'>3</span>
                            </li>
                            <li className='carriage-info-places-type'>
                                <span className='carriage-info-places-type-desc'>
                                    Нижние
                                </span>
                                <span className='carriage-info-places-type-count'>8</span>
                            </li>
                        </ul>
                    </div>
                    <div className='carriage-info-content-col carriage-info-cost'>
                        <header className='carriage-info-content-header carriage-info-cost-header'>
                            <span className='carriage-info-cost-desc'>Стоимость</span>
                        </header>
                        <ul className='carriage-info-content-ul carriage-info-cost-types'>
                            <li className='carriage-info-cost-type'>
                                <span className='carriage-info-cost-count'>2 920</span>
                                <span className='carriage-info-cost-money-symbol'>Р</span>
                            </li>
                            <li className='carriage-info-cost-type'>
                                <span className='carriage-info-cost-count'>3 530</span>
                                <span className='carriage-info-cost-money-symbol'>Р</span>
                            </li>
                        </ul>
                    </div>
                    <div className='carriage-info-content-col carriage-info-services'>
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
            <div className='carriage-people-amount-wrapper framed-places'>
                <div className='carriage-people-amount'>
                    11 человек выбирают места в этом поезде
                </div>
            </div>

            <CarriageSecond />
            <CarriageThird />
            <CarriageFirst />
            <CarriageFourth />
        </section>
    );
}
