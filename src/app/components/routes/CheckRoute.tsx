import React, { useEffect } from 'react';
import { useAppDispatch } from '../../redux/reduxHooks';
import { setPageCount } from '../../redux/slices/loaderSlice';
import TripDetailsFull from '../lib/Aside/TripDetails/TripDetailsFull';
import CheckPassengers from '../lib/Check/CheckPassengers';
import CheckPayment from '../lib/Check/CheckPayment';
import CheckTrain from '../lib/Check/CheckTrain';
import BtnNextRouteNav from '../lib/Common/BtnNextRouteNav';

export default function CheckRoute() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setPageCount(4));
    }, []);

    return (
        <main className='main main-central framed'>
            <aside className='aside-central'>
                <TripDetailsFull />
            </aside>

            <section className='content-central confirmation-content-central'>
                <CheckTrain />
                <CheckPassengers />
                <CheckPayment />
                <BtnNextRouteNav
                    to='somewhere' disabled={false}
                    desc='Подтвердить'
                />
            </section>
        </main>
    );
}
