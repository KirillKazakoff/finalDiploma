import React from 'react';

export default function MainAbout() {
    return (
        <section className='about framed' id='scroll-to'>
            <h2 className='section-title about-title'>О нас</h2>

            <div className='about-content'>
                <p className='about-p'>
                    Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы
                    наблюдаем, как с каждым днем все больше людей заказывают жд билеты
                    через интернет.
                </p>
                <p className='about-p'>
                    Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика,
                    но стоит ли это делать? Мы расскажем о преимуществах заказа через
                    интернет
                </p>
                <p className='about-p'>
                    Покупать жд билеты дешево можно за 90 суток до отправления поезда.
                    Благодаря динамическому ценообразованию цена на билеты в это время
                    самая низкая.
                </p>
            </div>
        </section>
    );
}
