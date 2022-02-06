import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchFormMain from '../Search/SearchFormMain';
import HeaderNav from './HeaderNav';
import HeaderTitleMain from './HeaderTitleMain';
import SearchFormInline from '../Search/SearchFormInline';
import HeaderProgressBar from './HeaderProgressBar';

export default function Header() {
    const { pathname } = useLocation();

    const HeaderOutletMain = (
        <>
            <section className='header-content framed'>
                <HeaderTitleMain plain='Вся жизнь -' bold='путешествие !' />
                <SearchFormMain />
            </section>
            <div className='header-line' />
        </>
    );

    const HeaderOutletContent = (
        <>
            <SearchFormInline />
            <HeaderProgressBar />
        </>
    );

    const HeaderOutletSuccess = null;

    const HeaderOutletError = <div>Error</div>;

    const HeaderOutlet = () => {
        if (pathname === '/') return HeaderOutletMain;
        if (pathname === '/success') return HeaderOutletSuccess;
        if (pathname === '/error') return HeaderOutletError;

        return HeaderOutletContent;
    };

    return (
        <header className='header'>
            <HeaderNav />
            <HeaderOutlet />
        </header>
    );
}
