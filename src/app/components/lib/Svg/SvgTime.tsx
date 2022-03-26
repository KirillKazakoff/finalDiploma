import React from 'react';
import Svg from './Svg';
import SvgType from './svgType';

export default function SvgTime({ height, className }: SvgType) {
    return (
        <Svg
            className={`${className}`}
            src='./svg/clock.svg'
            alt='clock'
            height={height}
        />
    );
}
