/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */
import React from 'react';
import { TicketRightProps } from '../../../../types/typesTicket';
import TicketType from './TicketType';

export default function TicketRight({ routes, available_seats_info }: TicketRightProps) {
    return (
        <aside className='ticket-aside-right'>
            <ul className='ticket-types'>
                <TicketType />
                <TicketType />
                <TicketType />
                <TicketType />
            </ul>
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
