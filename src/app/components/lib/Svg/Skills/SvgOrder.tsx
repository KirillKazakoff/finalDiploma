import React from 'react';
import Svg from '../Svg';
import SvgType from '../svgType';

export default function SvgOrder({ height }: SvgType) {
    return (
        <Svg
            src='./svg/skills/main/order.svg' height={height}
            alt='order'
        />
    );
}
