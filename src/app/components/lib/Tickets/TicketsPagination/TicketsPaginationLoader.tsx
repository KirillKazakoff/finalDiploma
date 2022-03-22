/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectFetchStatus } from '../../../../redux/slices/ticketsSlice';

type Props = { children: React.ReactNode };

export default function TicketsPaginationLoader({ children }: Props) {
    const fetchStatus = useAppSelector(selectFetchStatus);
    if (fetchStatus !== 'loading') return null;

    return <>{children}</>;
}
