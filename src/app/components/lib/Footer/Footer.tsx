/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';

export default function Footer() {
    return (
        <footer className='footer'>
            <FooterTop />
            <FooterBottom />
        </footer>
    );
}
