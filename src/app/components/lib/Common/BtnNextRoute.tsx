import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = { to: string; disabled: boolean };

export default function BtnNextRoute({ to, disabled }: Props) {
    const Button = (
        <button
            className='btn btn-next-section' type='button'
            disabled={disabled}
        >
            Далее
        </button>
    );

    return disabled ? Button : <NavLink to={to}>{Button}</NavLink>;
}
