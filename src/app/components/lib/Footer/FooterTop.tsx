/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import FooterContacts from './FooterContacts';
import FooterSocials from './FooterSocials';
import Subscription from './Subscription/Subscription';
import FooterTopCol from './FooterTopCol';

export default function FooterTop() {
    return (
        <section className='footer-top framed'>
            <FooterTopCol>
                <FooterContacts />
            </FooterTopCol>
            <FooterTopCol>
                <Subscription />
                <FooterSocials />
            </FooterTopCol>
        </section>
    );
}
