import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks';
import { setPageCount } from '../../redux/slices/loaderSlice';
import TripDetailsFull from '../lib/Aside/TripDetails/TripDetailsFull';
import CheckPassengers from '../lib/Check/CheckPassengers';
import CheckPayment from '../lib/Check/CheckPayment';
import CheckTrain from '../lib/Check/CheckTrain';
import BtnNextRoute from '../lib/Common/Form/BtnNextRoute';
import Form from '../lib/Common/Form/Form';
import { fetchPostOrder } from '../../fetch/api/fetchPostOrder';
import { selectFetchStatus } from '../../redux/slices/paymentFormSlice';
import PageLoader from '../lib/Common/PageLoader/PageLoader';

export default function CheckRoute() {
    const dispatch = useAppDispatch();
    const fetchStatus = useAppSelector(selectFetchStatus);

    useEffect(() => {
        dispatch(setPageCount(4));
    }, []);

    const onSubmit = () => {
        dispatch(fetchPostOrder());
    };

    if (fetchStatus !== 'loaded') {
        return <PageLoader cls='page-loader-main' desc='Обработка запроса...' />;
    }

    return (
        <main className='main main-central framed'>
            <aside className='aside-central'>
                <TripDetailsFull />
            </aside>

            <section className='content-central confirmation-content-central'>
                <CheckTrain />
                <CheckPassengers />
                <CheckPayment />
                <Form onSubmitForm={onSubmit}>
                    <BtnNextRoute>Подтвердить</BtnNextRoute>
                </Form>
            </section>
        </main>
    );
}
