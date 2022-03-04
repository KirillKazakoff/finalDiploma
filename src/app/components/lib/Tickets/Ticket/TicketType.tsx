import React from 'react';
import TicketTypeTip from './TicketTypeTip';

export default function TicketType() {
    return (
        <li className='ticket-type framed-ticket-right'>
            <ul className='ticket-type-tips framed-ticket-right'>
                <div className='ticket-type-tips-arrow-decor' />
                <TicketTypeTip amount={19} cost={2920}>
                    верхние
                </TicketTypeTip>
                <TicketTypeTip amount={69} cost={2300}>
                    нижние
                </TicketTypeTip>
            </ul>

            <span className='ticket-type-desc'>Сидячий</span>
            <span className='ticket-amount-left'>88</span>
            <div className='cost main-cost'>
                <span className='cost-prefix'>от</span>
                <div className='cost-count-container main-cost-count-container'>
                    <span className='cost-count main-cost-count'>3 800</span>
                    <span className='cost-money-symbol'>₽</span>
                </div>
            </div>
        </li>
    );
}
