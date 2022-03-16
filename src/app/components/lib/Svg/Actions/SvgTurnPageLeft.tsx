import React from 'react';
import Svg from '../Svg';
import SvgType from '../svgType';

export default function SvgTurnPageLeft({ height, filter }: SvgType) {
    return (
        <Svg
            src='./svg/actions/turn-page-left.svg'
            alt='turn-page-left'
            height={height}
            filter={filter}
        />
    );
}
