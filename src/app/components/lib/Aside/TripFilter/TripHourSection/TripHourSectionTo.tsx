import React from 'react';
import TripHourSection from './TripHourSection';
import HourSlider from './HourSlider';
import { useAppSelector } from '../../../../../redux/reduxHooks';

export default function TripHourSectionTo() {
    const minFrom = useAppSelector(
        (state) => state.searchFilter.start_departure_hour_from,
    );
    const maxFrom = useAppSelector((state) => state.searchFilter.end_departure_hour_from);
    const limitsFrom = { min: minFrom, max: maxFrom };

    const minTo = useAppSelector((state) => state.searchFilter.start_departure_hour_to);
    const maxTo = useAppSelector((state) => state.searchFilter.end_departure_hour_to);
    const limitsTo = { min: minTo, max: maxTo };

    return (
        <TripHourSection direction='to' desc='Туда'>
            <HourSlider
                dir='from' desc='Время отбытия'
                limits={limitsFrom}
            />
            <HourSlider
                dir='to' desc='Время прибытия'
                limits={limitsTo}
            />
        </TripHourSection>
    );
}
