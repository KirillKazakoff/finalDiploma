import React from 'react';
import Svg from '../Svg';
import SvgType from '../svgType';

export default function SvgNet({ height }: SvgType) {
    return (
        <Svg
            src='./svg/skills/main/net.svg' height={height}
            alt='net'
        />
    );
}
