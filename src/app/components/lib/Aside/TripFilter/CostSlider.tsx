import React, { useState } from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectCost } from '../../../../redux/slices/searchFilterSlice';
import SliderLabels from './SliderValues/SliderLabels';
import SliderLimit from './SliderValues/SliderLimit';
import SliderValue from './SliderValues/SliderValue';
import SliderValues from './SliderValues/SliderValues';
import SliderValuesContainer from './SliderValues/SliderValuesContainer';
import useSliderInit from './SliderValues/useSliderInit';
import Example from './SliderValues/Example';

export default function CostSlider() {
    const cost = useAppSelector(selectCost);
    const { minTotal: min, maxTotal: max } = cost;
    const limits = { min, max };
    const { refs, onMouseClosure } = useSliderInit(limits);

    return (
        <SliderValuesContainer>
            <SliderLabels />
            <SliderValues sliderRef={refs.bar} progressRef={refs.progressBar}>
                <SliderValue
                    circleRef={refs.circleFrom}
                    type='from price_from'
                    onMouseClosure={onMouseClosure}
                    initValue={min}
                />
                <SliderValue
                    circleRef={refs.circleTo}
                    type='to price_to'
                    onMouseClosure={onMouseClosure}
                    initValue={max}
                />
            </SliderValues>
            <SliderLimit>{max}</SliderLimit>
            <Example />
        </SliderValuesContainer>
    );
}
