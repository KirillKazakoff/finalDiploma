import React from 'react';
import { InputState } from '../../../../redux/slices/utils/reduxInputUtils';
import { numberToArray } from '../utils/numberToArray';

type Props = { amount: number; cls: string; state: InputState };
export default function PlaceholderUnderscores(props: Props) {
    const { amount, cls, state } = props;
    const { isActive, value } = state;

    const indexes = numberToArray(amount).map((index) => {
        return (
            <div
                className={`placeholder-underscore placeholder-underscore-${cls}`}
                key={index}
            />
        );
    });

    if (isActive || value) return null;
    return <div className='placeholder-underscores'>{indexes}</div>;
}
