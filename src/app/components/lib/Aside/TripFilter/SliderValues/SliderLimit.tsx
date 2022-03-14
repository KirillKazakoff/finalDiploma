/* eslint-disable no-param-reassign */
import React from 'react';
import { SliderLimitProps } from '../../../../../types/typesTripFilter';
import { getClients } from './moveUtils';

export default function SliderLimit({ children, refs }: SliderLimitProps) {
    const { circleFrom, circleTo, bar } = refs;
    if (!circleFrom.current || !circleTo.current || !bar.current) return null;

    const { from, to } = getClients(circleFrom.current, circleTo.current);
    const barBorder = bar.current.getBoundingClientRect().right;

    const borders = [from.right, to.rigth];

    const isLimitHidden = borders.reduce<boolean>((total, border) => {
        console.log(border, barBorder);
        if (border + 50 > barBorder) total = false;
        return total;
    }, true);

    // console.log(isLimitHidden);
    if (!isLimitHidden) return null;
    return <span className='slider-flag-value'>{children}</span>;
}
