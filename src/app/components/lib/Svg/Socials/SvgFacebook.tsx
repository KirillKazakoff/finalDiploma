import React from 'react';
import Svg from '../Svg';
import SvgType from '../svgType';

export default function SvgFacebook({ height }: SvgType) {
    return (
        <Svg
            src='./svg/socials/facebook.svg' height={height}
            alt='facebook'
        />
    );
}
