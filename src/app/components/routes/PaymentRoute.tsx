import React, { useEffect } from 'react';
import TripDetailsFull from '../lib/Aside/TripDetails/TripDetailsFull';
import BtnNextRouteNew from '../lib/Common/BtnNextRouteNew';
import PaymentPersonalData from '../lib/Payment/PaymentPersonalData/PaymentPersonalData';
import PaymentPersonalWay from '../lib/Payment/PaymentPersonalWay/PaymentPersonalWay';
import { useAppDispatch } from '../../redux/reduxHooks';
import { refreshPay } from '../../redux/slices/paymentFieldsSlice';

export default function PaymentRoute() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        // dispatch(refreshPay());
    }, []);
    return (
        <main className='main main-central framed'>
            <aside className='aside-central'>
                <TripDetailsFull />
            </aside>

            <section className='content-central'>
                <form className='passenger-form passenger-payment-form'>
                    <div className='payment-form-content shadowed'>
                        <PaymentPersonalData />

                        <PaymentPersonalWay />
                    </div>

                    <BtnNextRouteNew>Купить билеты</BtnNextRouteNew>
                </form>
            </section>
        </main>
    );
}
