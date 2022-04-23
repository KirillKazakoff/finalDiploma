import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../lib/Header/Header';
import Footer from '../lib/Footer/Footer';
import ErrorNavigator from '../lib/Utils/ErrorNavigator';
import Information from '../lib/Utils/Information';
import LocationNavigator from '../lib/Utils/LocationNavigator';
import HistoryError from '../lib/Utils/HistoryError';
import { useCheckLocation } from '../lib/Utils/useCheckLocation';

export default function PageRoute() {
    const checkLocation = useCheckLocation();

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
