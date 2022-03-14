import React from 'react';
import TripDate from './TripDate/TripDate';
import Togglers from './Togglers';
import TripHourSectionTo from './TripHourSection/TripHourSectionTo';
import TripHourSectionFrom from './TripHourSection/TripHourSectionFrom';
import TripCostSection from './TripCostSection/TripCostSection';

export default function TripFilter() {
    return (
        <div className='aside-part aside-part-trip'>
            <div className='trip-section'>
                <TripDate />
            </div>
            <div className='trip-section'>
                <Togglers />
            </div>
            <TripCostSection />
            <TripHourSectionTo />
            <TripHourSectionFrom />
        </div>
    );
}
