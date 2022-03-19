import React from 'react';
import { useAppSelector } from '../../../../../redux/reduxHooks';
import { setCost } from '../../../../../redux/slices/searchFilterSlice';
import { selectCostLimits } from '../../../../../redux/slices/ticketsSlice';
import SliderLabels from '../SliderValues/SliderLabels';
import SliderValueCost from '../SliderValues/SliderValueCost';
import SliderValues from '../SliderValues/SliderValues';
import SliderValuesContainer from '../SliderValues/SliderValuesContainer';
import useSliderInit from '../SliderValues/useSliderInit';
import SliderLimitCost from './SliderLimitCost';

export default function CostSlider() {
    const cost = useAppSelector(selectCostLimits);
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
            <SliderLimitCost refs={refs}>{max}</SliderLimitCost>
        </SliderValuesContainer>
    );
}
