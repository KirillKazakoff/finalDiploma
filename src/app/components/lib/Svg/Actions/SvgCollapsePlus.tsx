import React from 'react';
import Svg from '../Svg';
import SvgType from '../svgType';

export default function SvgCollapsePlus({ height }: SvgType) {
    return (
        <Svg
            src='./svg/actions/collapse-plus.svg'
            height={height}
            alt='mail'
            className='btn-collapse'
        />
    );
}
