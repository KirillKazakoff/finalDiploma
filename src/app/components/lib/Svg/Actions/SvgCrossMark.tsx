import React from 'react';
import Svg from '../Svg';
import SvgType from '../svgType';

export default function SvgCrossMark({ height, filter }: SvgType) {
    return (
        <Svg
            src='./svg/actions/cross-mark.svg'
            height={height}
            alt='cross-mark'
            filter={filter}
        />
    );
}
