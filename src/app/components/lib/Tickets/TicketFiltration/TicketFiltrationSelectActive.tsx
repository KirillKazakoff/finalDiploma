import React from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectSort } from '../../../../redux/slices/searchFilterSlice';
import mapIdToName from './mapIdToName';

type Props = { setActiveHandler: () => void };

export default function TicketFiltrationSelectActive({ setActiveHandler }: Props) {
    const activeSort = useAppSelector(selectSort);
    return (
        <button
            onClick={setActiveHandler}
            className='filtration-sort-type filtration-sort-type-active'
            id={activeSort}
            type='button'
        >
            {mapIdToName(activeSort)}
        </button>
    );
}
