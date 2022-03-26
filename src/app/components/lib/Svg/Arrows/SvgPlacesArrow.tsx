import React from 'react';
import { DirTProp } from '../../../../types/typesPlaces';
import Svg from '../Svg';
import SvgType from '../svgType';

type SvgSliderArrowProps = SvgType & DirTProp;

export default function SvgPlacesArrow({ height, dir }: SvgSliderArrowProps) {
    return (
        <Svg
            src={`./svg/arrows/arrow-travel-time-${dir}.svg`}
            height={height}
            alt='arrow'
            className='places-arrow'
        />
    );
}
