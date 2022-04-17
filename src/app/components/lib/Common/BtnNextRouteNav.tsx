import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = { to: string; desc: string; disabled?: boolean; cls?: string };

export default function BtnNextRouteNav(props: Props) {
    const {
        to, desc, disabled, cls,
    } = props;

    return (
        <div className={`next-route-wrapper next-route-wrapper-${cls}`}>
            <NavLink className='navlink' to={to}>
                <button
                    className={`btn btn-next-section btn-next-section-${cls}`}
                    type='button'
                    disabled={disabled}
                >
                    {desc}
                </button>
            </NavLink>
        </div>
    );
}

BtnNextRouteNav.defaultProps = {
    cls: 'default',
    disabled: false,
};
