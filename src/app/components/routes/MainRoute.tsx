import React from 'react';
import MainAbout from '../lib/MainPage/MainAbout';
import MainDescription from '../lib/MainPage/MainDescription';
import MainReviews from '../lib/MainPage/MainReviews/MainReviews';

export default function MainRoute() {
    return (
        <main className='main'>
            <MainAbout />

            <MainDescription />

            <MainReviews />
        </main>
    );
}
