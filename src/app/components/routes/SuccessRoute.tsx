import React from 'react';

export default function SuccessRoute() {
    return (
        <main className='main-success'>
            <div className='success-popup'>
                <h1 className='success-popup-title'>Благодарим Вас за заказ!</h1>
                <div className='success-popup-container shadowed'>
                    <header className='success-popup-header framed-success'>
                        <span className='success-order-number'>№Заказа 285АА</span>
                        <div className='success-total-cost'>
                            <span className='success-total-cost-desc'>сумма</span>
                            <div className='cost-count-container'>
                                <span className='cost-count'>7 760</span>
                                <span className='cost-money-symbol success-cost-money-symbol'>
                                    Р
                                </span>
                            </div>
                        </div>
                    </header>
                    <section className='success-popup-section success-popup-section-tips framed-success'>
                        <ul className='success-tips'>
                            <li className='success-tip'>
                                <img
                                    src='./svg/skills/success/mail.svg'
                                    alt='mail-send-pic'
                                />
                                <span className='success-tip-desc'>
                                    билеты будут отправлены на ваш
                                    <span style={{ fontWeight: '500' }}>e-mail</span>
                                </span>
                            </li>
                            <li className='success-tip'>
                                <img
                                    src='./svg/skills/success/print.svg'
                                    alt='mail-send-pic'
                                />
                                <span className='success-tip-desc'>
                                    <span style={{ fontWeight: '500' }}>
                                        распечатайте
                                    </span>
                                    и сохраняйте билеты до даты поездки
                                </span>
                            </li>
                            <li className='success-tip'>
                                <img
                                    src='./svg/skills/success/show.svg'
                                    alt='mail-send-pic'
                                />
                                <span className='success-tip-desc'>
                                    <span style={{ fontWeight: '500' }}>предъявите</span>
                                    распечатанные билеты при посадке
                                </span>
                            </li>
                        </ul>
                    </section>
                    <section className='success-popup-section success-popup-section-appeal framed-success'>
                        <div className='success-appeal-container'>
                            <h2 className='success-greeting'>Ирина Эдуардовна!</h2>
                            <span className='success-info'>
                                Ваш заказ успешно оформлен. В ближайшее время с вами
                                свяжется наш оператор для подтверждения.
                            </span>
                            <span className='success-thanks'>
                                Благодарим Вас за оказанное доверие и желаем приятного
                                путешествия!
                            </span>
                        </div>
                    </section>
                    <section className='success-popup-section success-popup-section-rate framed-success'>
                        <div className='success-rate-container'>
                            <span className='success-rate-desc'>Оценить сервис</span>
                            <ul className='success-rate-stars'>
                                <li className='success-rate-star'>
                                    <img src='./svg/actions/rate-star.svg' alt='star' />
                                </li>
                                <li className='success-rate-star'>
                                    <img src='./svg/actions/rate-star.svg' alt='star' />
                                </li>
                                <li className='success-rate-star'>
                                    <img src='./svg/actions/rate-star.svg' alt='star' />
                                </li>
                                <li className='success-rate-star'>
                                    <img src='./svg/actions/rate-star.svg' alt='star' />
                                </li>
                                <li className='success-rate-star'>
                                    <img src='./svg/actions/rate-star.svg' alt='star' />
                                </li>
                            </ul>
                            <button className='btn success-back-to-main' type='button'>
                                <a href='./index.html'>Вернуться на главную</a>
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
