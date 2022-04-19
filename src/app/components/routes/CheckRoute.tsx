import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks';
import { setPageCount } from '../../redux/slices/loaderSlice';
import TripDetailsFull from '../lib/Aside/TripDetails/TripDetailsFull';
import CheckPassengers from '../lib/Check/CheckPassengers';
import CheckPayment from '../lib/Check/CheckPayment';
import CheckTrain from '../lib/Check/CheckTrain';
import { selectFetchStatus } from '../../redux/slices/paymentFormSlice';
import PageLoader from '../lib/Common/PageLoader/PageLoader';
import CheckForm from '../lib/Check/CheckForm';
import { useCheckRoutes } from '../lib/Check/useCheckRoutes';
import RouteError from '../lib/Aside/TripDetails/RouteError';

export default function CheckRoute() {
    const dispatch = useAppDispatch();
    const fetchStatus = useAppSelector(selectFetchStatus);

    const checkError = useCheckRoutes();
    const { to, desc, isError } = checkError;

    const renderAside = () => {
        if (!isError) return <TripDetailsFull />;
        return <RouteError to={to} desc={desc} />;
    };

    useEffect(() => {
        dispatch(setPageCount(4));
    }, []);

    if (fetchStatus !== 'loaded') {
        return <PageLoader cls='page-loader-main' desc='Обработка запроса...' />;
    }

    return (
        <main className='main main-central framed'>
            <aside className='aside-central'>{renderAside()}</aside>

            <section className='content-central confirmation-content-central'>
                <CheckTrain />
                <CheckPassengers />
                <CheckPayment />
                <CheckForm errorDesc={desc} />
            </section>
        </main>
    );
}
