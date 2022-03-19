import React from 'react';
import { SliderLimitProps } from '../../../../../types/typesTripFilter';
import SliderLimit from '../SliderValues/SliderLimit';
import { useAppSelector } from '../../../../../redux/reduxHooks';
import { selectCost } from '../../../../../redux/slices/searchFilterSlice';

export default function SliderLimitCost({ children, refs }: SliderLimitProps) {
    useAppSelector(selectCost);
    return <SliderLimit refs={refs}>{children}</SliderLimit>;
}
