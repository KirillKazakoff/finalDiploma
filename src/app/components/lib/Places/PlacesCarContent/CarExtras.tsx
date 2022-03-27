import React from 'react';

export default function CarExtras() {
    return (
        <div className='carriage-info-content-col carriage-info-services'>
            <header className='carriage-info-content-header carriage-info-service-header'>
                <span className='carriage-info-service-desc'>Обслуживание</span>
                <span className='carriage-info-service-company'>ФПК</span>
            </header>
            <ul className='carriage-info-content-ul carriage-info-services-list'>
                <li className='carriage-info-service-item wireless'>
                    <img
                        className='filter-black'
                        width='19px'
                        src='./svg/features/wireless.svg'
                        alt='wireless'
                    />
                </li>
                <li className='carriage-info-service-item carriage-info-service-item-active blanket'>
                    <img
                        className='filter-white'
                        width='24px'
                        src='./svg/features/blanket.svg'
                        alt='blanket'
                    />
                </li>
            </ul>
        </div>
    );
}
