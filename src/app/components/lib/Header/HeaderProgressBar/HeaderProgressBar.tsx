import './progressLine.css';
import React from 'react';
import { nanoid } from 'nanoid';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectPageStatus } from '../../../../redux/slices/loaderSlice';
import BarPiece from './BarPiece';

export default function HeaderProgressBar() {
    const pageStatus = useAppSelector(selectPageStatus);
    if (pageStatus !== 'loaded') return null;
    const bars = ['билеты', 'пассажиры', 'оплата', 'проверка'].map((desc, index) => {
        return (
            <BarPiece
                count={index + 1} desc={desc}
                key={nanoid()}
            />
        );
    });

    return <div className='progress-line'>{bars}</div>;
}
