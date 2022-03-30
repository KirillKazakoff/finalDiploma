import React from 'react';
import { formatCarCount } from '../../Common/utils/format';

type Props = { children: React.ReactNode; carNumber: number };

export default function CarriageScheme(props: Props) {
    const { children, carNumber } = props;

    return (
        <div className='carriage-container framed-places'>
            <div className='carriage-scheme-number'>{formatCarCount(carNumber)}</div>
            <img
                className='carriage-left'
                src='./img/carriages/carriage-left.png'
                alt='carriage-left'
            />
            {children}
            <img
                className='carriage-right'
                src='./img/carriages/carriage-right.png'
                alt='carriage-right'
            />
        </div>
    );
}
