import React from 'react';
import TripForm from './TripDate/TripDate';
import Togglers from './Togglers';
import CostSlider from './CostSlider';
import TripHourSection from './TripHourSection/TripHourSection';
import TripHourSectionTo from './TripHourSection/TripHourSectionTo';

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
            <TripHourSection direction='from' desc='Обратно'>
                bye
            </TripHourSection>
        </div>
    );
}
