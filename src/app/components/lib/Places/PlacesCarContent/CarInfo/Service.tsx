import React from 'react';

type Props = { service: { src: string; isIncluded: boolean; price: number } };

export default function Service({ service }: Props) {
    const { src, isIncluded, price } = service;
    let containerCls = 'carriage-info-service-item';
    const imgCls = `carriage-${src}`;

    if (isIncluded) {
        containerCls = `${containerCls} ${containerCls}-included`;
    }

    return (
        <li className='carriage-info-service-item'>
            <img
                width='19px'
                className={`carriage-${src}`}
                src={`./svg/features/${src}.svg`}
                alt={src}
            />
        </li>
    );
}
