import React from 'react';
import Svg from '../Svg';
import SvgType from '../svgType';

export default function SvgLinkedIn({ height }: SvgType) {
    return (
        <Svg
            src='./svg/socials/linkedIn.svg' height={height}
            alt='linkedIn'
        />
    );
}
