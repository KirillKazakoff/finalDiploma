import React from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectTotalPrice } from '../../../../redux/slices/utils/selectTotalPrice';
import formatCost from '../utils/format';
import { selectOrderId } from '../../../../redux/slices/paymentFormSlice';

export default function SuccessHeader() {
    const price = useAppSelector(selectTotalPrice);
    const orderId = useAppSelector(selectOrderId);

    return (
        <header className='success-popup-header framed-success'>
            <span className='success-order-number'>{`№Заказа ${orderId}AA`}</span>
            <div className='success-total-cost'>
                <span className='success-total-cost-desc'>сумма</span>
                <div className='cost-count-container'>
                    <span className='cost-count'>{formatCost(price)}</span>
                    <span className='cost-money-symbol success-cost-money-symbol'>Р</span>
                </div>
            </div>
        </header>
    );
}
