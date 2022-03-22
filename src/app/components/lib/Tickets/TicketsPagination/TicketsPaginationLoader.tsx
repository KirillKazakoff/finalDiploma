import React from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectFetchStatus } from '../../../../redux/slices/ticketsSlice';
import SpinLoader from '../../Common/SpinLoader';

type Props = { cls: string };

export default function TicketsPaginationLoader({ cls }: Props) {
    const fetchStatus = useAppSelector(selectFetchStatus);
    if (fetchStatus !== 'loading') return null;

    return <SpinLoader cls={cls} />;
}
