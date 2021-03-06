import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = { onClick: () => void };

export default function TicketToPlaces({ onClick }: Props) {
    return (
        <NavLink to='/places'>
            <button
                type='button' className='btn btn-choose-places'
                onClick={onClick}
            >
                Выбрать места
            </button>
        </NavLink>
    );
}
