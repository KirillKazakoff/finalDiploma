/* eslint-disable no-param-reassign */
import React from 'react';
import { SliderLimitProps } from '../../../../../types/typesTripFilter';
import { getClients } from './moveUtils';
import { useAppSelector } from '../../../../../redux/reduxHooks';
import { selectSliders } from '../../../../../redux/slices/searchFilterSlice';

export default function SliderLimit({ children, refs }: SliderLimitProps) {
    useAppSelector(selectSliders);

    const { circleFrom, circleTo, bar } = refs;
    if (!circleFrom.current || !circleTo.current || !bar.current) return null;

    const { from, to } = getClients(circleFrom.current, circleTo.current);
    const barBorder = bar.current.getBoundingClientRect().right;

    const borders = [from.right, to.rigth];

    const isLimitHidden = borders.reduce<boolean>((total, border) => {
        if (border + 50 > barBorder) total = false;
        return total;
    }, true);

    if (!isLimitHidden) return null;
    return <span className='slider-flag-value'>{children}</span>;
}
