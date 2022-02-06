import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../lib/Header/Header';
import Footer from '../lib/Footer/Footer';

export default function PageRoute() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
