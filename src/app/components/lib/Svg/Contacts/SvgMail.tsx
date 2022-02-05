import React from 'react';
import Svg from '../Svg';
import SvgType from '../svgType';

export default function SvgMail({ height }: SvgType) {
    return (
        <Svg
            src='./svg/contacts/mail.svg' height={height}
            alt='mail'
        />
    );
}
