/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */
import { nanoid } from 'nanoid';
import React from 'react';
import { TicketRightProps } from '../../../../types/typesTicket';
import TicketType from './TicketType';

export default function TicketRight({ routes, seatsInfoAux }: TicketRightProps) {
    const ticketTypes = Object.entries(seatsInfoAux).map(([typeKey, typeInfo]) => (
        <TicketType
            key={nanoid()} typeInfo={typeInfo}
            typeKey={typeKey}
        />
    ));

    return (
        <aside className='ticket-aside-right'>
            {ticketTypes}
            <footer className='ticket-footer framed-ticket-right'>
                <div className='extra-options'>
                    <img
                        className='filter-secondary'
                        src='./svg/features/wireless.svg'
                        alt='wireless'
                    />
                    <img
                        className='filter-secondary'
                        src='./svg/features/rocket.svg'
                        alt='rocket'
                    />
                    <img
                        className='filter-secondary'
                        src='./svg/features/cup.svg'
                        alt='cup'
                    />
                </div>
                <button type='submit' className='btn btn-choose-places'>
                    Выбрать места
                </button>
            </footer>
        </aside>
    );
}
