/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { HTMLProps } from 'react';

type Props = HTMLProps<HTMLButtonElement> & {
    direction: 'left' | 'right';
};

export default function DatePickerArrow({ onClick, direction, disabled }: Props) {
    const disabledCls = disabled ? 'disabled' : '';
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`date-picker-arrow date-picker-arrow-${direction} ${disabledCls}`}
            type='button'
        />
    );
}
