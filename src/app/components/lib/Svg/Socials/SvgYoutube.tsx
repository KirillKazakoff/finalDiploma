import React from 'react';
import Svg from '../Svg';
import SvgType from '../svgType';

export default function SvgYoutube({ height }: SvgType) {
    return (
        <Svg
            src='./svg/socials/youtube.svg' height={height}
            alt='youtube'
        />
    );
}
