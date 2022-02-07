import React from 'react';
import { useAppDispatch } from '../../../../redux/reduxHooks';

type SearchWayTipProps = { city: string };

export default function SearchWayTip({ city }: SearchWayTipProps) {
    const dispatch = useAppDispatch();
    const onClick = () => {};

    return <li className='search-way-tip'>{city}</li>;
}
