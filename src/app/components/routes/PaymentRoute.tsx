import React, { useEffect } from 'react';
import TripDetailsFull from '../lib/Aside/TripDetails/TripDetailsFull';
import { useAppDispatch } from '../../redux/reduxHooks';
import PaymentForm from '../lib/Payment/PaymentForm';
import { setPageCount } from '../../redux/slices/loaderSlice';

export default function PaymentRoute() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setPageCount(3));
    });

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
