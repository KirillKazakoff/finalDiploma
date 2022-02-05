import React from 'react';
import Svg from '../Svg';
import SvgType from '../svgType';

export default function SvgSkype({ height }: SvgType) {
    return (
        <Svg
            src='./svg/contacts/skype.svg' height={height}
            alt='skype'
        />
    );
}
