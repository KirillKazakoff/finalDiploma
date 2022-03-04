import React from 'react';
import { TicketLeftProps } from '../../../../types/typesTicket';

export default function TicketLeft({ departure }: TicketLeftProps) {
    const { train, from, to } = departure;

    return (
        <aside className='ticket-aside-left'>
            <div className='train-wrapper train-wrapper-lg'>
                <img
                    className='ic-train' src='./svg/train.svg'
                    alt='train'
                />
            </div>
            <div className='train-number'>{train.name}</div>
            <ul className='train-stations'>
                <li className='train-station train-station-next'>
                    <span className='train-station-desc'>{from.city.name}</span>
                    <img src='./svg/arrows/arrow-station.svg' alt='arrow' />
                </li>
                <li className='train-station train-station-next'>
                    <span className='train-station-desc'>{to.city.name}</span>
                </li>
            </ul>
        </aside>
    );
}
