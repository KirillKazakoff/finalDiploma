/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React, { HTMLProps } from 'react';
import SvgType from './svgType';

type SvgProps = HTMLProps<HTMLImageElement> & SvgType;

export default function Svg({
    src, alt, height, className,
}: SvgProps) {
    return (
        <img
            alt={alt} src={src}
            className={className} height={`${height}`}
        />
    );
}

Svg.defaultProps = {
    height: '',
};
