import React, { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectCost } from '../../../../redux/slices/searchFilterSlice';
import SliderValues from './SliderValues';
import { selectFetchStatus } from '../../../../redux/slices/searchFormSlice';

export default function CostSlider() {
    const cost = useAppSelector(selectCost);
    const fetchStatus = useAppSelector(selectFetchStatus);

    const { price_from, price_to } = cost;
    const [state, setState] = useState(0);

    useEffect(() => {
        setState(price_to);
    }, [fetchStatus]);

    return (
        <SliderValues
            fromValue={price_from} toValue={price_to}
            maxValue={state}
        />
    );
}
