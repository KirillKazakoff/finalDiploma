import React from 'react';
import TripHourSection from './TripHourSection';
import HourSlider from './HourSlider';
import { setHourDeparture } from '../../../../../redux/slices/searchFilterSlice';

export default function TripHourSectionTo() {
    const limits = { min: 0, max: 86400000 };

    return (
        <TripHourSection direction='to' desc='Туда'>
            <HourSlider
                setSliderFilter={setHourDeparture}
                dir='from'
                desc='Время отбытия'
                typeFrom='start_departure_hour_from'
                typeTo='end_departure_hour_from'
                limits={limits}
            />
            <HourSlider
                setSliderFilter={setHourDeparture}
                dir='to'
                desc='Время прибытия'
                typeFrom='start_departure_hour_to'
                typeTo='end_departure_hour_to'
                limits={limits}
            />
        </TripHourSection>
    );
}
