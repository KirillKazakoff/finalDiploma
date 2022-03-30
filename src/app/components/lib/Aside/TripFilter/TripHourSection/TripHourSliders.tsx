import React from 'react';
import HourSlider from './HourSlider';
import { SetSliderFilterT } from '../../../../../types/typesPayload';

type Props = { setFilter: SetSliderFilterT };

export default function TripHourSliders({ setFilter }: Props) {
    const limits = { min: 0, max: 86400000 };

    return (
        <div className='sliders'>
            <HourSlider
                setSliderFilter={setFilter}
                dir='from'
                desc='Время отбытия'
                typeFrom='start_hour_from'
                typeTo='end_hour_from'
                limits={limits}
            />
            <HourSlider
                setSliderFilter={setFilter}
                dir='to'
                desc='Время прибытия'
                typeFrom='start_hour_to'
                typeTo='end_hour_to'
                limits={limits}
            />
        </div>
    );
}
