import React from 'react';

export default function PlacesCarTypes() {
    return (
        <section className='places-section places-section-carriage'>
            <h2 className='places-section-title framed-places'>Тип вагона</h2>
            <ul className='carriage-types'>
                <li className='carriage-type filter-secondary'>
                    <img
                        className='ic-carriage-type'
                        src='./svg/features/person.svg'
                        alt=''
                    />
                    <span className='carriage-type-title'>Сидячий</span>
                </li>
                <li className='carriage-type filter-secondary'>
                    <img
                        className='ic-carriage-type'
                        src='./svg/features/plaz.svg'
                        alt=''
                    />
                    <span className='carriage-type-title'>Плацкарт</span>
                </li>
                <li className='carriage-type filter-main'>
                    <img
                        className='ic-carriage-type'
                        src='./svg/features/coupe.svg'
                        alt=''
                    />
                    <span className='carriage-type-title'>Купе</span>
                </li>
                <li className='carriage-type filter-secondary'>
                    <img
                        className='ic-carriage-type'
                        src='./svg/features/star.svg'
                        alt=''
                    />
                    <span className='carriage-type-title'>Люкс</span>
                </li>
            </ul>
        </section>
    );
}
