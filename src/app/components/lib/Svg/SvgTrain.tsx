import React from 'react';
import Svg from './Svg';
import SvgType from './svgType';

export default function SvgTrain({ height, className }: SvgType) {
    return (
        <Svg
            className={`${className}`}
            src='./svg/train.svg'
            alt='train'
            height={height}
        />
    );
}
