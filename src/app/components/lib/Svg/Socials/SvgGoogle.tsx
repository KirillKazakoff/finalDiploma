import React from 'react';
import Svg from '../Svg';
import SvgType from '../svgType';

export default function SvgGoogle({ height }: SvgType) {
    return (
        <Svg
            src='./svg/socials/google.svg' height={height}
            alt='google'
        />
    );
}
