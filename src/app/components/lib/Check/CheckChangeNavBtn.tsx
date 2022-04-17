import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = { to: string; desc: string };

export default function CheckChangeNavBtn({ to, desc }: Props) {
    return (
        <NavLink to={to}>
            <button type='button' className='btn btn-check-change'>
                {desc}
            </button>
        </NavLink>
    );
}
