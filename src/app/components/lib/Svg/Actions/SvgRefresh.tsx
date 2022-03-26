import React from 'react';
import Svg from '../Svg';
import SvgType from '../svgType';

export default function SvgRefresh({ height }: SvgType) {
    return (
        <Svg
            src='./svg/actions/refresh.svg' height={height}
            alt='Refresh'
        />
    );
}
