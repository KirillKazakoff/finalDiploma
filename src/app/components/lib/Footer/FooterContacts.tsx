import React from 'react';
import SvgMail from '../Svg/Contacts/SvgMail';
import SvgPhone from '../Svg/Contacts/SvgPhone';
import SvgSkype from '../Svg/Contacts/SvgSkype';
import SvgLocation from '../Svg/SvgLocation';
import FooterContact from './FooterContact';

export default function FooterContacts() {
    return (
        <div className='contacts' id='contacts'>
            <h2 className='footer-subtitle contacts-title'>Свяжитесь с нами</h2>
            <ul className='contacts-list'>
                <FooterContact
                    href='tel:8 (800) 000 00 00'
                    icon={<SvgPhone height={30} />}
                    desc='8 (800) 000 00 00'
                />
                <FooterContact
                    href='mailto:inbox@mail.ru'
                    icon={<SvgMail height={25} />}
                    desc='inbox@mail.ru'
                />
                <FooterContact
                    href='skype:tu.train.tickets'
                    icon={<SvgSkype height={30} />}
                    desc='tu.train.tickets'
                />
                <FooterContact
                    href='http://maps.google.com/?q=г. Москва ул. Московская 27-35 555 555'
                    icon={<SvgLocation height={28} />}
                    desc='г. Москва ул. Московская 27-35 555 555'
                />
            </ul>
        </div>
    );
}
