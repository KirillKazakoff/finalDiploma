import React from 'react';
import TripHourSection from './TripHourSection';
import HourSlider from './HourSlider';
import { setHourArrival } from '../../../../../redux/slices/searchFilterSlice';

export default function TripHourSectionFrom() {
    const limits = { min: 0, max: 86400000 };

    return (
        <TripHourSection direction='from' desc='Обратно'>
            <HourSlider
                setSliderFilter={setHourArrival}
                dir='from'
                desc='Время отбытия'
                typeFrom='start_arrival_hour_from'
                typeTo='end_arrival_hour_from'
                limits={limits}
            />
            <HourSlider
                setSliderFilter={setHourArrival}
                dir='to'
                desc='Время прибытия'
                typeFrom='start_arrival_hour_to'
                typeTo='end_arrival_hour_to'
                limits={limits}
            />
        </TripHourSection>
    );
}
