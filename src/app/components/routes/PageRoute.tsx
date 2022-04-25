import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../lib/Header/Header';
import Footer from '../lib/Footer/Footer';
import ErrorNavigator from '../lib/Utils/ErrorNavigator';
import Information from '../lib/Utils/Information';
import LocationNavigator from '../lib/Utils/LocationNavigator';
import { useCheckLocation } from '../lib/Utils/useCheckLocation';

export default function PageRoute() {
    const navigate = useNavigate();
    const checkLocation = useCheckLocation();

    useEffect(() => {
        if (!checkLocation) navigate('/history-error');
    }, [checkLocation, navigate]);

    if (!checkLocation) return null;
    return (
        <>
            <Information />
            <LocationNavigator />
            <ErrorNavigator />

            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
