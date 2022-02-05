import React from 'react';
import Svg from '../Svg';
import SvgType from '../svgType';

export default function SvgTwitter({ height }: SvgType) {
    return (
        <Svg
            src='./svg/socials/twitter.svg' height={height}
            alt='twitter'
        />
    );
}
