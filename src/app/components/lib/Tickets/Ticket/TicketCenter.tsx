import React from 'react';
import { TicketCenterProps } from '../../../../types/typesTicket';
import TrainRoute from '../TrainRoute';

export default function TicketCenter({ routes }: TicketCenterProps) {
    const { departure, arrival } = routes;

    return (
        <div className='ticket-center'>
            <TrainRoute route={departure} arrowCls='to' />
            {arrival ? <TrainRoute route={arrival} arrowCls='from' /> : null}
        </div>
    );
}
