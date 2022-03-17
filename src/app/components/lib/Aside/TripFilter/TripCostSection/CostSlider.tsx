import React from 'react';
import { useAppSelector } from '../../../../../redux/reduxHooks';
import { selectCost, setCost } from '../../../../../redux/slices/searchFilterSlice';
import SliderLabels from '../SliderValues/SliderLabels';
import SliderLimit from '../SliderValues/SliderLimit';
import SliderValueCost from '../SliderValues/SliderValueCost';
import SliderValues from '../SliderValues/SliderValues';
import SliderValuesContainer from '../SliderValues/SliderValuesContainer';
import useSliderInit from '../SliderValues/useSliderInit';

export default function CostSlider() {
    const cost = useAppSelector(selectCost);
    const { minTotal: min, maxTotal: max } = cost;
    const limits = { min, max };
    const { refs, onMouseClosure } = useSliderInit(limits, setCost);

    return (
        <SliderValuesContainer>
            <SliderLabels />
            <SliderValues
                cls='slider-cost'
                sliderRef={refs.bar}
                progressRef={refs.progressBar}
            >
                <SliderValueCost
                    circleRef={refs.circleFrom}
                    type='from price_from'
                    onMouseClosure={onMouseClosure}
                    initValue={min}
                />
                <SliderValueCost
                    circleRef={refs.circleTo}
                    type='to price_to'
                    onMouseClosure={onMouseClosure}
                    initValue={max}
                />
            </SliderValues>
            <SliderLimit refs={refs}>{max}</SliderLimit>
        </SliderValuesContainer>
    );
}