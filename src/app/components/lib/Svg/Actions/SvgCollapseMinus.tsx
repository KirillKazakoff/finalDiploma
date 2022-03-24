import React from 'react';
import Svg from '../Svg';
import SvgType from '../svgType';

export default function SvgCollapseMinus({ height }: SvgType) {
    return (
        <Svg
            src='./svg/actions/collapse-minus.svg'
            height={height}
            alt='mail'
            className='btn-collapse'
        />
    );
}
