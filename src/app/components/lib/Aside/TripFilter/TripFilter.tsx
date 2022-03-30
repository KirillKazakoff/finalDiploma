import React from 'react';
import TripDate from './TripDate/TripDate';
import Togglers from './Togglers';
import TripCostSlider from './TripCostSection/TripCostSlider';
import {
    setHourArrival,
    setHourDeparture,
} from '../../../../redux/slices/searchFilterSlice';
import TripHourSliders from './TripHourSection/TripHourSliders';
import SubtleContainer from './TripHourSection/SubtleContainerHour';

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
            <SubtleContainer dir='to' desc='Туда'>
                <TripHourSliders setFilter={setHourDeparture} />
            </SubtleContainer>
            <SubtleContainer dir='from' desc='Обратно'>
                <TripHourSliders setFilter={setHourArrival} />
            </SubtleContainer>
        </div>
    );
}
