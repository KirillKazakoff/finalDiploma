/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { HTMLProps } from 'react';

type Props = HTMLProps<HTMLButtonElement> & {
    direction: 'left' | 'right';
};

export default function DatePickerArrow({ onClick, direction }: Props) {
    return (
        <button
            // onClick={onClick}
            className={`date-picker-arrow date-picker-arrow-${direction}`}
            type='button'
        />
    );
}
