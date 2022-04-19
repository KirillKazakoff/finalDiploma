import React from 'react';
import { NavLink } from 'react-router-dom';
import TripTitle from './TripTitle';

type Props = { to: string; desc: string };

export default function RouteError({ to, desc }: Props) {
    return (
        <div className='aside-part aside-part-trip'>
            <TripTitle />
            <NavLink to={to}>
                <div className='trip-details trip-details-empty'>
                    <button type='button' className='btn btn-trip-details-empty'>
                        {desc}
                    </button>
                </div>
            </NavLink>
        </div>
    );
}
