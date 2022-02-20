import React from 'react';
import Svg from '../Svg';
import SvgType from '../svgType';

export default function SvgTick({ height, filter }: SvgType) {
    return (
        <Svg
            src='./svg/actions/tick.svg' height={height}
            alt='tick' filter={filter}
        />
    );
}
