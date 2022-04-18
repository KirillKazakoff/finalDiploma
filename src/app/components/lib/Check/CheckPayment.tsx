import React from 'react';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectPayMethod } from '../../../redux/slices/paymentFieldsSlice';
import { selectTotalPrice } from '../../../redux/slices/utils/selectTotalPrice';
import { matchPayMethod } from '../Payment/PaymentPersonalWay/matchPayMethod';
import CheckChangeNavBtn from './CheckChangeNavBtn';

export default function CheckPayment() {
    const payMethod = useAppSelector(selectPayMethod);
    const totalPrice = useAppSelector(selectTotalPrice);

    if (totalPrice === 0) return null;

    return (
        <section className='confirmation-section confirmation-section-payment shadowed'>
            <header className='passenger-header confirmation-passenger-header framed-passengers'>
                <span className='passenger-desc'>Способ оплаты</span>
            </header>
            <div className='confirmation-container'>
                <ul className='confirmation-list'>
                    <li className='confirmation-list-row'>
                        <div className='confirmation-list-col'>
                            <span className='confirmation-payment-way'>
                                {matchPayMethod(payMethod)}
                            </span>
                        </div>
                    </li>
                </ul>
                <div className='confirmation-change'>
                    <CheckChangeNavBtn to='/payment' desc='Изменить' />
                </div>
            </div>
        </section>
    );
}
