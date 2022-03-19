import React from 'react';
import TripDate from './TripDate/TripDate';
import Togglers from './Togglers';
import TripCostSection from './TripCostSection/TripCostSection';
import TripHourSliders from './TripHourSection/TripHourSliders';
import {
    setHourArrival,
    setHourDeparture,
} from '../../../../redux/slices/searchFilterSlice';

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
            <TripHourSliders setFilter={setHourDeparture} />
            <TripHourSliders setFilter={setHourArrival} />
        </div>
    );
}
