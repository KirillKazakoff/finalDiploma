import React from 'react';
import { TicketTypeTipProps } from '../../../../types/typesTicket';
import formatCost from '../../Common/utils/format';

export default function TicketTypeTip({ children, amount, cost }: TicketTypeTipProps) {
    return (
        <li className='ticket-type-tip'>
            <span className='ticket-type-desc'>{children}</span>
            <span className='ticket-amount-left'>{amount}</span>
            <div className='cost main-cost'>
                <div className='cost-count-container main-cost-count-container'>
                    <span className='cost-count main-cost-count'>{formatCost(cost)}</span>
                    <span className='cost-money-symbol'>₽</span>
                </div>
            </div>
        </li>
    );
}
