import React from 'react';
import SliderLimit from '../SliderValues/SliderLimit';
import SliderValueHour from '../SliderValues/SliderValueHour';
import SliderValues from '../SliderValues/SliderValues';
import SliderValuesContainer from '../SliderValues/SliderValuesContainer';
import useSliderInit from '../SliderValues/useSliderInit';
import { HourSliderProps } from '../../../../../types/typesTripFilter';
import HourSliderTitle from './HourSliderTitle';

export default function HourSlider({ dir, limits, desc }: HourSliderProps) {
    const { refs, onMouseClosure } = useSliderInit(limits);
    const { min, max } = limits;

    return (
        <SliderValuesContainer>
            <HourSliderTitle dir={dir} desc={desc} />
            <SliderValues
                cls='slider-hour'
                sliderRef={refs.bar}
                progressRef={refs.progressBar}
            >
                <SliderValueHour
                    circleRef={refs.circleFrom}
                    type='from price_from'
                    onMouseClosure={onMouseClosure}
                    initValue={min}
                />
                <SliderValueHour
                    circleRef={refs.circleTo}
                    type='to price_to'
                    onMouseClosure={onMouseClosure}
                    initValue={max}
                />
            </SliderValues>
            <SliderLimit>{max}</SliderLimit>
        </SliderValuesContainer>
    );
}
