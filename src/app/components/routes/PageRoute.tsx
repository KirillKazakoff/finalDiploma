import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../lib/Header/Header';
import Footer from '../lib/Footer/Footer';
import ErrorNavigator from '../lib/Utils/ErrorNavigator';
import Information from '../lib/Utils/Information';

export default function PageRoute() {
    return (
        <>
            <Information />
            <ErrorNavigator />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
