import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../lib/Header/Header';
import Footer from '../lib/Footer/Footer';
import ErrorNavigator from '../lib/Utils/ErrorNavigator';

export default function PageRoute() {
    return (
        <>
            <ErrorNavigator />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
