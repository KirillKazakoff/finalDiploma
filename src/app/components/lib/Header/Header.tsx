import React from 'react';
import SearchFormMain from '../Search/SearchFormMain';
import HeaderNav from './HeaderNav';
import HeaderTitleMain from './HeaderTitleMain';

export default function Header() {
    return (
        <header className='header'>
            <HeaderNav />

            <section className='header-content framed'>
                <HeaderTitleMain plain='Вся жизнь -' bold='путешествие !' />
                <SearchFormMain />
            </section>
            <div className='header-line' />
        </header>
    );
}
