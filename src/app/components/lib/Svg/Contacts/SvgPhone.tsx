import React from 'react';
import Svg from '../Svg';
import SvgType from '../svgType';

export default function SvgPhone({ height }: SvgType) {
    return (
        <Svg
            src='./svg/contacts/phone.svg' height={height}
            alt='Phone'
        />
    );
}
