/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */
import { nanoid } from 'nanoid';
import React from 'react';
import { TicketRightProps } from '../../../../types/typesTicket';
import Extras from '../../Common/Extras';
import TicketType from './TicketType';

export default function TicketRight({ routes, seatsInfoAux }: TicketRightProps) {
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
                <button type='submit' className='btn btn-choose-places'>
                    Выбрать места
                </button>
            </footer>
        </aside>
    );
}
