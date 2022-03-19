import React from 'react';
import TripDate from './TripDate/TripDate';
import Togglers from './Togglers';
import TripCostSlider from './TripCostSection/TripCostSlider';
import {
    setHourArrival,
    setHourDeparture,
} from '../../../../redux/slices/searchFilterSlice';
import TripHourSliders from './TripHourSection/TripHourSliders';

export default function TripFilter() {
    return (
        <div className='aside-part aside-part-trip'>
            <div className='trip-section'>
                <TripDate />
            </div>
            <div className='trip-section'>
                <Togglers />
            </div>
            <TripCostSlider />
            <TripHourSliders setFilter={setHourDeparture} />
            <TripHourSliders setFilter={setHourArrival} />
        </div>
    );
}
