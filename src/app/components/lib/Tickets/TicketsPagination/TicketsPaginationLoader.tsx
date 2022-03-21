import React from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectFetchStatus } from '../../../../redux/slices/ticketsSlice';
import InputLoader from '../../Common/inputLoader';

type Props = { cls: string };

export default function TicketsPaginationLoader({ cls }: Props) {
    const fetchStatus = useAppSelector(selectFetchStatus);
    // if (fetchStatus !== 'loading') return null;

    return <InputLoader cls={cls} />;
}
