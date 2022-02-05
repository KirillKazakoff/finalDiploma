import React from 'react';
import SvgMail from '../Svg/Contacts/SvgMail';
import SvgPhone from '../Svg/Contacts/SvgPhone';
import SvgSkype from '../Svg/Contacts/SvgSkype';
import SvgLocation from '../Svg/SvgLocation';

export default function FooterContacts() {
    return (
        <div className='contacts'>
            <h2 className='footer-subtitle contacts-title'>Свяжитесь с нами</h2>
            <ul className='contacts-list'>
                <li className='contact'>
                    <SvgPhone height={30} />
                    <a className='contact-link' href='tel:8 (800) 000 00 00'>
                        8 (800) 000 00 00
                    </a>
                </li>
                <li className='contact'>
                    <SvgMail height={25} />
                    <a className='contact-link' href='mailto:inbox@mail.ru'>
                        inbox@mail.ru
                    </a>
                </li>
                <li className='contact'>
                    <SvgSkype height={30} />
                    <a className='contact-link' href='skype:tu.train.tickets'>
                        tu.train.tickets
                    </a>
                </li>
                <li className='contact'>
                    <SvgLocation height={28} />
                    <a
                        className='contact-link'
                        href='http://maps.google.com/?q=г. Москва ул. Московская 27-35 555 555'
                    >
                        г. Москва ул. Московская 27-35 555 555
                    </a>
                </li>
            </ul>
        </div>
    );
}
