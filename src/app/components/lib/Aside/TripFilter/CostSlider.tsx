import React, { useState } from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectCost } from '../../../../redux/slices/searchFilterSlice';
import SliderValues from './SliderValues/SliderValues';

export default function CostSlider() {
    const cost = useAppSelector(selectCost);
    const { minTotal, maxTotal } = cost;

    return <SliderValues min={minTotal} max={maxTotal} />;
}
