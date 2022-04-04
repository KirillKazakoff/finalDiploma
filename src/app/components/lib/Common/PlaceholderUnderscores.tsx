import React from 'react';
import { numberToArray } from './utils/numberToArray';

type Props = { amount: number; cls: string };
export default function PlaceholderUnderscores({ amount, cls }: Props) {
    const indexes = numberToArray(amount).map((index) => {
        return (
            <div
                className={`placeholder-underscore placeholder-underscore-${cls}`}
                key={index}
            />
        );
    });

    return <div className='placeholder-underscores'>{indexes}</div>;
}
