/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React, { HTMLProps } from 'react';

type SvgProps = HTMLProps<HTMLImageElement> & { height?: number };

export default function Svg({ src, alt, height }: SvgProps) {
    return (
        <img
            alt={alt} src={src}
            height={`${height} px`}
        />
    );
}
