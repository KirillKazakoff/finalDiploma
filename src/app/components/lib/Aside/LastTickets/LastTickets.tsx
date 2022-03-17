import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useAppDispatch, useAppSelector } from '../../../../redux/reduxHooks';
import { fetchLast } from '../../../../fetch/api/fetchLast';
import LastRoute from './LastRoute';
import { selectFetchStatus, selectLast } from '../../../../redux/slices/lastTicketsSlice';

export default function LastTickets() {
    const dispatch = useAppDispatch();
    const lastTickets = useAppSelector(selectLast);
    const fetchStatus = useAppSelector(selectFetchStatus);

    useEffect(() => {
        dispatch(fetchLast());
    }, []);

    const lastRoutes = lastTickets.map((ticket) => (
        <LastRoute key={nanoid()} ticket={ticket} />
    ));

    return (
        <div className='aside-part aside-part-last-tickets'>
            <h2 className='last-tickets-title'>Последние билеты</h2>
            {fetchStatus === 'loading' ? null : (
                <ul className='last-tickets'>{lastRoutes}</ul>
            )}
        </div>
    );
}
