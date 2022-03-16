import React from 'react';
import { SortTypeT } from '../../../../types/typesSlices';
import { useAppDispatch } from '../../../../redux/reduxHooks';
import { setSort } from '../../../../redux/slices/searchFilterSlice';
import mapIdToName from './mapIdToName';

type Props = { id: SortTypeT; setActiveHandler: () => void };
export default function TicketFiltrationSelectType(props: Props) {
    const { setActiveHandler, id } = props;
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(setSort(id));
        setActiveHandler();
    };

    return (
        <button
            className='filtration-sort-type filtration-sort-type-select'
            id={id}
            onClick={onClick}
            type='button'
        >
            {mapIdToName(id)}
        </button>
    );
}
