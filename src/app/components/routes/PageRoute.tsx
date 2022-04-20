import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../lib/Header/Header';
import Footer from '../lib/Footer/Footer';
import ErrorNavigator from '../lib/Utils/ErrorNavigator';
import Information from '../lib/Utils/Information';
import LocationNavigator from '../lib/Utils/LocationNavigator';

export default function PageRoute() {
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
