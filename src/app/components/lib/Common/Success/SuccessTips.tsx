import React from 'react';

export default function SuccessTips() {
    return (
        <section className='success-popup-section success-popup-section-tips framed-success'>
            <ul className='success-tips'>
                <li className='success-tip'>
                    <img src='./svg/skills/success/mail.svg' alt='mail-send-pic' />
                    <span className='success-tip-desc'>
                        билеты будут отправлены на ваш
                        {' '}
                        <span className='success-tip-emphasized'>e-mail</span>
                    </span>
                </li>
                <li className='success-tip'>
                    <img src='./svg/skills/success/print.svg' alt='mail-send-pic' />
                    <span className='success-tip-desc'>
                        <span className='success-tip-emphasized'>распечатайте</span>
                        и
                        сохраняйте билеты до даты поездки
                    </span>
                </li>
                <li className='success-tip'>
                    <img src='./svg/skills/success/show.svg' alt='mail-send-pic' />
                    <span className='success-tip-desc'>
                        <span className='success-tip-emphasized'>предъявите</span>
                        распечатанные билеты при посадке
                    </span>
                </li>
            </ul>
        </section>
    );
}
