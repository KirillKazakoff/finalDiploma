import React from 'react';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectPageStatus } from '../../../redux/slices/loaderSlice';

export default function HeaderProgressBar() {
    const pageStatus = useAppSelector(selectPageStatus);
    if (pageStatus !== 'loaded') return null;
    return (
        <div className='progress-line'>
            <div className='bar '>
                <div className='bar-count'>1</div>
                <div className='bar-desc'>Билеты</div>
            </div>
            <div className='bar bar-active'>
                <div className='bar-count'>2</div>
                <div className='bar-desc'>Пассажиры</div>
            </div>
            <div className='bar'>
                <div className='bar-count'>3</div>
                <div className='bar-desc'>Оплата</div>
            </div>
            <div className='bar'>
                <div className='bar-count'>4</div>
                <div className='bar-desc'>Проверка</div>
            </div>
        </div>
    );
}
