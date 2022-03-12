import React, { useState } from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectCost } from '../../../../redux/slices/searchFilterSlice';
import SliderLabels from './SliderValues/SliderLabels';
import SliderLimit from './SliderValues/SliderLimit';
import SliderValues from './SliderValues/SliderValues';
import SliderValuesContainer from './SliderValues/SliderValuesContainer';

export default function CostSlider() {
    const cost = useAppSelector(selectCost);
    const { minTotal, maxTotal } = cost;

    return (
        <SliderValuesContainer>
            <SliderLabels />
            <SliderValues min={minTotal} max={maxTotal} />
            <SliderLimit>{maxTotal}</SliderLimit>
        </SliderValuesContainer>
    );
}
