import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../lib/Header/Header';
import Footer from '../lib/Footer/Footer';
import ErrorNavigator from '../lib/Utils/ErrorNavigator';
import Information from '../lib/Utils/Information';
import LocationNavigator from '../lib/Utils/LocationNavigator';
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks';
import { refreshLocations, selectLocations } from '../../redux/slices/locationsSlice';
import HistoryError from '../lib/Utils/HistoryError';
import { useCheckLocation } from '../lib/Utils/useCheckLocation';

export default function PageRoute() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        // dispatch(refreshLocations());
    }, []);
    const checkLocation = useCheckLocation();
    // const activeLocation = useLocation();
    // const locations = useAppSelector(selectLocations);

    // const foundLoc = locations.find((location) => {
    //     return activeLocation.key === location.key;
    // });

    // let outletRes = <Outlet />;
    // const path = activeLocation.pathname;
    // if (foundLoc && foundLoc.wasOrderSucceded && path !== '/') {
    //     outletRes = <HistoryError />;
    // }

    return (
        <>
            <Information />
            <LocationNavigator />
            <ErrorNavigator />

            <Header />
            {checkLocation ? <Outlet /> : <HistoryError />}
            <Footer />
        </>
    );
}
