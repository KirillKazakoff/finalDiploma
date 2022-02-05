/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function Footer() {
    return (
        <footer className='footer'>
            <section className='footer-top framed'>
                <div className='footer-top-left-row'>
                    <div className='contacts'>
                        <h2 className='footer-subtitle contacts-title'>
                            Свяжитесь с нами
                        </h2>
                        <ul className='contacts-list'>
                            <li className='contact'>
                                <img
                                    src='./svg/contacts/phone.svg'
                                    width='30px'
                                    alt='phone'
                                />
                                <a className='contact-link' href='tel:8 (800) 000 00 00'>
                                    8 (800) 000 00 00
                                </a>
                            </li>
                            <li className='contact'>
                                <img
                                    src='./svg/contacts/mail.svg'
                                    width='30px'
                                    alt='mail'
                                />
                                <a className='contact-link' href='mailto:inbox@mail.ru'>
                                    inbox@mail.ru
                                </a>
                            </li>
                            <li className='contact'>
                                <img
                                    src='./svg/contacts/skype.svg'
                                    width='30px'
                                    alt='skype'
                                />
                                <a className='contact-link' href='skype:tu.train.tickets'>
                                    tu.train.tickets
                                </a>
                            </li>
                            <li className='contact'>
                                <img
                                    src='./svg/contacts/location.svg'
                                    width='20px'
                                    alt='location'
                                />
                                <span className='contact-link contact-link-location'>
                                    г. Москва ул. Московская 27-35 555 555
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='footer-top-right-row'>
                    <div className='subscription'>
                        <h2 className='footer-subtitle subscription-title'>Подписка</h2>
                        <form className='form subscribe-form'>
                            <label
                                htmlFor='subscribe'
                                className='label label-subscription'
                            >
                                Будьте в курсе событий
                            </label>

                            <div className='subscribe-form-row'>
                                <div className='input-wrapper input-wrapper-subscription'>
                                    <input
                                        id='subscribe'
                                        className='input input-subscription'
                                        type='mail'
                                        placeholder='e-mail'
                                    />
                                </div>

                                <button className='btn btn-subscribe' type='button'>
                                    Отправить
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='socials'>
                        <h2 className='footer-subtitle'>Подписывайтесь на нас</h2>
                        <ul className='socials-list'>
                            <li className='social'>
                                <a href='/#' className='social-link'>
                                    <img
                                        src='./svg/socials/youtube.svg'
                                        width='35px'
                                        alt='youtube'
                                    />
                                </a>
                            </li>
                            <li className='social'>
                                <a href='/#' className='social-link'>
                                    <img
                                        src='./svg/socials/linkedIn.svg'
                                        width='30px'
                                        alt='linkedIn'
                                    />
                                </a>
                            </li>
                            <li className='social'>
                                <a href='/#' className='social-link'>
                                    <img
                                        src='./svg/socials/google.svg'
                                        width='45px'
                                        alt='google'
                                    />
                                </a>
                            </li>
                            <li className='social'>
                                <a href='/#' className='social-link'>
                                    <img
                                        src='./svg/socials/facebook.svg'
                                        width='15px'
                                        alt='facebook'
                                    />
                                </a>
                            </li>
                            <li className='social'>
                                <a href='/#' className='social-link'>
                                    <img
                                        src='./svg/socials/twitter.svg'
                                        width='35px'
                                        alt='twitter'
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='footer-bottom framed'>
                <div className='logo'>Лого</div>
                <button className='footer-collapse material-icons' type='button'>
                    <img
                        src='./svg/footer-arrow.svg' width='15px'
                        alt='arrow'
                    />
                </button>
                <p className='copyright'>2022 WEB</p>
            </section>
        </footer>
    );
}
