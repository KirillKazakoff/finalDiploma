import React from 'react';
import TripForm from './TripDate/TripDate';
import Togglers from './Togglers';
import SliderValues from './SliderValues';

export default function TripFilter() {
    return (
        <div className='aside-part aside-part-trip'>
            <div className='trip-section'>
                <TripForm />
            </div>
            <div className='trip-section'>
                <Togglers />
            </div>
            <div className='trip-section trip-section-cost'>
                <h2 className='row-title row-title-small cost-title'>Стоимость</h2>
                <SliderValues />
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
