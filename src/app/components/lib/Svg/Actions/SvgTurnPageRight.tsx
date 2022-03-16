import React from 'react';
import Svg from '../Svg';
import SvgType from '../svgType';

export default function SvgTurnPageRight({ height, filter }: SvgType) {
    return (
        <Svg
            src='./svg/actions/turn-page-right.svg'
            alt='turn-page-right'
            height={height}
            filter={filter}
        />
    );
}
