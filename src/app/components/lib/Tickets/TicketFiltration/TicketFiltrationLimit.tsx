/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../redux/reduxHooks';
import { selectLimit, setLimit } from '../../../../redux/slices/searchFilterSlice';

export default function TicketFiltrationLimit() {
    const dispatch = useAppDispatch();
    const activeLimit = useAppSelector(selectLimit);
    const limitNumbers = [5, 10, 20];

    const onClickClosure = (limit: number) => () => {
        dispatch(setLimit(limit));
    };

    const limits = limitNumbers.map((limit) => {
        let className = 'filtration-amount-number';
        if (limit === activeLimit) className = `${className} ${className}-active`;

        return (
            <li
                key={limit} className={className}
                onClick={onClickClosure(limit)}
            >
                {limit}
            </li>
        );
    });

    return (
        <div className='filtration-amount'>
            <span className='filtration-amount-desc'>показывать по:</span>
            <ul className='filtration-amount-numbers'>{limits}</ul>
        </div>
    );
}
