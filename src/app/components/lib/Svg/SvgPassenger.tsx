import React from 'react';
import Svg from './Svg';
import SvgType from './svgType';

export default function SvgPassenger({ height }: SvgType) {
    return (
        <Svg
            src='./svg/passenger.svg' height={height}
            alt='passenger'
        />
    );
}
