import React from 'react';
import TripForm from './TripDate/TripDate';
import Togglers from './Togglers';
import CostSlider from './CostSlider';
import TripHourSectionTo from './TripHourSection/TripHourSectionTo';
import TripHourSectionFrom from './TripHourSection/TripHourSectionFrom';

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
                <CostSlider />
            </div>
            <TripHourSectionTo />
            <TripHourSectionFrom />
        </div>
    );
}
