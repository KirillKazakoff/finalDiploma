import React from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectTotalPrice } from '../../../../redux/slices/utils/selectTotalPrice';
import formatCost from '../../Common/utils/format';

export default function TripTotal() {
    const total = useAppSelector(selectTotalPrice);

    return (
        <section className='trip-section trip-section-subtle-total'>
            <div className='subtle-container total-subtle-container'>
                <h2 className='total-passengers'>Итог</h2>
                <div className='total-cost-count-container'>
                    <span className='total-cost-count'>{formatCost(total)}</span>
                    <span className='total-cost-money-symbol'>₽</span>
                </div>
            </div>
        </section>
    );
}
