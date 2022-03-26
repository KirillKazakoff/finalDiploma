import { nanoid } from 'nanoid';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { TicketRightProps } from '../../../../types/typesTicket';
import Extras from '../../Common/Extras';
import TicketType from './TicketType';

export default function TicketRight({ routes, seatsInfoAux, onClick }: TicketRightProps) {
    const ticketTypes = Object.entries(seatsInfoAux).map(([typeKey, typeInfo]) => (
        <TicketType
            key={nanoid()} typeInfo={typeInfo}
            typeKey={typeKey}
        />
    ));

    const { have_air_conditioning, have_wifi, is_express } = routes.departure;
    const extras = { have_air_conditioning, have_wifi, is_express };

    return (
        <aside className='ticket-aside-right'>
            {ticketTypes}
            <footer className='ticket-footer framed-ticket-right'>
                <Extras extras={extras} filter='filter-secondary' />
                <NavLink to='/places'>
                    <button
                        type='button'
                        className='btn btn-choose-places'
                        onClick={onClick}
                    >
                        Выбрать места
                    </button>
                </NavLink>
            </footer>
        </aside>
    );
}
