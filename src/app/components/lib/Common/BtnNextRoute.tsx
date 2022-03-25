import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = { to: string; disabled: boolean };

export default function BtnNextRoute({ to, disabled }: Props) {
    return (
        <NavLink to={to}>
            <button
                className='btn btn-next-section' type='button'
                disabled={disabled}
            >
                Далее
            </button>
        </NavLink>
    );
}
