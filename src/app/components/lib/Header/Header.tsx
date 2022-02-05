import React from 'react';

export default function Header() {
    return (
        <header className='header'>
            <nav className='nav'>
                <div className='logo logo-header'>Лого</div>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <a href='/#' className='nav-link'>
                            О нас
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/find-train.html' className='nav-link'>
                            Как это работает
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/#' className='nav-link'>
                            Отзывы
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/#' className='nav-link'>
                            Контакты
                        </a>
                    </li>
                </ul>
            </nav>

            <section className='header-content framed'>
                <div className='header-title'>
                    Вся жизнь -
                    {' '}
                    <span className='header-title-bold'>путешествие!</span>
                </div>

                <form className='header-form'>
                    <div className='form-row '>
                        <h2 className='row-title'>Направление</h2>
                        <div className='input-wrapper'>
                            <input placeholder='Откуда' className='input input-from' />
                            <img
                                src='./svg/location.svg' height='32px'
                                alt=''
                            />
                        </div>
                        <img
                            className='ic ic-refresh'
                            src='./svg/actions/refresh.svg'
                            width='25px'
                            alt=''
                        />
                        <div className='input-wrapper'>
                            <input placeholder='Куда' className='input input-to' />
                            <img
                                src='./svg/location.svg' height='32px'
                                alt=''
                            />
                        </div>
                    </div>

                    <div className='form-row'>
                        <h2 className='row-title'>Дата</h2>
                        <div className='input-wrapper'>
                            <input placeholder='ДД/ММ/ГГ' className='input input-from' />
                            <img
                                src='./svg/calendar.svg' height='32px'
                                alt='calendar'
                            />
                        </div>
                        <span className='space-row' />
                        <div className='input-wrapper'>
                            <input placeholder='ДД/ММ/ГГ' className='input input-to' />
                            <img
                                src='./svg/calendar.svg' height='32px'
                                alt=''
                            />
                        </div>
                    </div>

                    <button className='btn find-tickets-btn' type='button'>
                        Найти билеты
                    </button>
                </form>
            </section>
            <div className='header-line' />
        </header>
    );
}
