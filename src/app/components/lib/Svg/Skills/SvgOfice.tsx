import React from 'react';
import Svg from '../Svg';
import SvgType from '../svgType';

export default function SvgOfice({ height }: SvgType) {
    return (
        <Svg
            src='./svg/skills/main/ofice.svg' height={height}
            alt='ofice'
        />
    );
}
