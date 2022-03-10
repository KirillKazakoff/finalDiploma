import React, { useState } from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectCost } from '../../../../redux/slices/searchFilterSlice';
import SliderValues from './SliderValues/SliderValues';

export default function CostSlider() {
    const cost = useAppSelector(selectCost);

    const { minTotal, maxTotal } = cost;
    const [fromValue, setFrom] = useState(minTotal);
    const [toValue, setTo] = useState(maxTotal);

    return (
        <SliderValues
            fromValue={fromValue} toValue={toValue}
            maxValue={maxTotal}
        />
    );
}
