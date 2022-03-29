import React from 'react';

export default function CarInfoContentServices() {
    return (
        <div className='carriage-info-services'>
            <header className='carriage-info-content-header carriage-info-service-header'>
                <span className='carriage-info-service-desc'>Обслуживание</span>
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
    );
}
