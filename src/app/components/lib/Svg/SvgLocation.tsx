import React from 'react';
import SvgType from './svgType';
import Svg from './Svg';

export default function SvgLocation({ height }: SvgType) {
    return (
        <Svg
            src='./svg/location.svg' height={height}
            alt='Location'
        />
    );
}
