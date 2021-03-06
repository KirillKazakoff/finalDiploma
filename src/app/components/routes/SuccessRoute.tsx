import React, { useEffect } from 'react';
import SuccessHeader from '../lib/Common/Success/SuccessHeader';
import SuccessTips from '../lib/Common/Success/SuccessTips';
import SuccessFarewell from '../lib/Common/Success/SuccessFarewell';
import SuccessFooter from '../lib/Common/Success/SuccessFooter';
import { useRefreshRoutes } from '../lib/Check/useRefreshRoutes';
import { useAppDispatch } from '../../redux/reduxHooks';
import { setOrderSuccess } from '../../redux/slices/locationsSlice';

export default function SuccessRoute() {
    const dispatch = useAppDispatch();
    const refreshRoutes = useRefreshRoutes();

    useEffect(() => {
        return () => {
            dispatch(setOrderSuccess());
            refreshRoutes();
        };
    });

    return (
        <main className='main-success'>
            <div className='success-popup'>
                <h1 className='success-popup-title'>Благодарим Вас за заказ!</h1>
                <div className='success-popup-container shadowed'>
                    <SuccessHeader />
                    <SuccessTips />
                    <SuccessFarewell />
                    <SuccessFooter />
                </div>
            </div>
        </main>
    );
}
