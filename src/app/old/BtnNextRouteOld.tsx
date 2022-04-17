import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = { to: string; disabled: boolean; cls?: string };

export default function BtnNextRouteOld({ to, disabled, cls }: Props) {
    return (
        <NavLink className='navlink' to={to}>
            <button
                className={`btn btn-next-section btn-next-section-${cls}`}
                type='button'
                disabled={disabled}
            >
                Далее
            </button>
        </NavLink>
    );
}

BtnNextRouteOld.defaultProps = {
    cls: 'default',
};