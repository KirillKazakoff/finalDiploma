/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Footer from './components/lib/Footer/Footer';
import Header from './components/lib/Header/Header';
import MainPage from './components/lib/MainPage/MainPage';

export default function App() {
    return (
        <>
            <Header />
            <MainPage />
            <Footer />
        </>
    );
}
