import React from 'react';
import Svg from './Svg';
import SvgType from './svgType';

type SvgSliderArrowProps = SvgType & { direction: 'to' | 'from' };

export default function SvgSliderArrow({ height, direction }: SvgSliderArrowProps) {
    return (
        <Svg
            src={`./svg/arrows/arrow-subtle-time-${direction}.svg`}
            height={height}
            alt='arrow'
        />
    );
}
