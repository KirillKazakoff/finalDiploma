import React from 'react';
import MainAbout from './MainAbout';
import MainDescription from './MainDescription';
import MainReviews from './MainReviews';

export default function MainPage() {
    return (
        <main className='main'>
            <MainAbout />

            <MainDescription />

            <MainReviews />
        </main>
    );
}
