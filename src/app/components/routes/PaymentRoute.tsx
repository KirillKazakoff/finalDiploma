import React, { useEffect } from 'react';
import TripDetailsFull from '../lib/Aside/TripDetails/TripDetailsFull';
import { useAppDispatch } from '../../redux/reduxHooks';
import { refreshPay } from '../../redux/slices/paymentFieldsSlice';
import PaymentForm from '../lib/Payment/PaymentForm';

export default function PaymentRoute() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(refreshPay());
    }, []);
    return (
        <main className='main main-central framed'>
            <aside className='aside-central'>
                <TripDetailsFull />
            </aside>

            <section className='content-central'>
                <PaymentForm />
            </section>
        </main>
    );
}
