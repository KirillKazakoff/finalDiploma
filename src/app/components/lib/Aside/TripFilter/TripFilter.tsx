import React from 'react';
import TripForm from './TripDate';

export default function TripFilter() {
    return (
        <div className='aside-part aside-part-trip'>
            <div className='trip-section'>
                <TripForm />
            </div>
            <div className='trip-section'>
                <ul className='togglers'>
                    <li className='toggler-container'>
                        <img src='./svg/features/coupe.svg' alt='coupe' />
                        <div className='toggler-desc'>Купе</div>
                        <div className='toggler-plug' />
                    </li>
                    <li className='toggler-container'>
                        <img src='./svg/features/plaz.svg' alt='plaz' />
                        <div className='toggler-desc'>Плацкарт</div>
                        <div className='toggler-plug' />
                    </li>
                    <li className='toggler-container'>
                        <img src='./svg/features/person.svg' alt='person' />
                        <div className='toggler-desc'>Сидячий</div>
                        <div className='toggler-plug' />
                    </li>
                    <li className='toggler-container'>
                        <img src='./svg/features/star.svg' alt='star' />
                        <div className='toggler-desc'>Люкс</div>
                        <div className='toggler-plug' />
                    </li>
                    <li className='toggler-container'>
                        <img src='./svg/features/wireless.svg' alt='wireless' />
                        <div className='toggler-desc'>Wi-Fi</div>
                        <div className='toggler-plug' />
                    </li>
                    <li className='toggler-container'>
                        <img src='./svg/features/rocket.svg' alt='rocket' />
                        <div className='toggler-desc'>Экспресс</div>
                        <div className='toggler-plug' />
                    </li>
                </ul>
            </div>
            <div className='trip-section trip-section-cost'>
                <h2 className='row-title row-title-small cost-title'>Стоимость</h2>
                <div className='slider-plug' />
            </div>
            <div className='trip-section trip-section-subtle'>
                <div className='subtle-container'>
                    <img
                        className='ic-subtle-arrow-sm'
                        src='./svg/arrows/arrow-subtle-time-to.svg'
                        alt='arrow-to'
                    />
                    <div className='subtle-desc'>Туда</div>
                    <div className='subtle-collapse'>+</div>
                </div>
            </div>
            <div className='trip-section trip-section-subtle'>
                <div className='subtle-container'>
                    <img
                        className='ic-subtle-arrow-sm'
                        src='./svg/arrows/arrow-subtle-time-from.svg'
                        alt='arrow-from'
                    />
                    <div className='subtle-desc'>Обратно</div>
                    <div className='subtle-collapse'>+</div>
                </div>
            </div>
        </div>
    );
}
