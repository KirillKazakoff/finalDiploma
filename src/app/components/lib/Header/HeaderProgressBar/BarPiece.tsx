import React from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectPageCount } from '../../../../redux/slices/loaderSlice';
import BarArrow from './BarArrow';

type BarPieceProps = { count: number; desc: string };

export default function BarPiece({ count, desc }: BarPieceProps) {
    const pageCount = useAppSelector(selectPageCount);
    const cls = pageCount >= count ? 'bar-active' : '';

    return (
        <div className={`bar ${cls}`}>
            <div className='bar-content'>
                <div className='bar-count'>{count}</div>
                <div className='bar-desc'>{desc}</div>
            </div>
            {count !== 4 ? <BarArrow /> : null}
        </div>
    );
}
