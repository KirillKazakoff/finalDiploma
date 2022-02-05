import React from 'react';

export default function MainPage() {
    return (
        <main className='main'>
            <section className='about framed'>
                <h2 className='section-title about-title'>О нас</h2>

                <div className='about-content'>
                    <p className='about-p'>
                        Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы
                        наблюдаем, как с каждым днем все больше людей заказывают жд билеты
                        через интернет.
                    </p>
                    <p className='about-p'>
                        Сегодня можно заказать железнодорожные билеты онлайн всего в 2
                        клика, но стоит ли это делать? Мы расскажем о преимуществах заказа
                        через интернет
                    </p>
                    <p className='about-p'>
                        Покупать жд билеты дешево можно за 90 суток до отправления поезда.
                        Благодаря динамическому ценообразованию цена на билеты в это время
                        самая низкая.
                    </p>
                </div>
            </section>

            <section className='description framed'>
                <header className='description-header'>
                    <h2 className='section-title ddescription-title'>Как это работает</h2>
                    <button className='btn know-more-btn' type='button'>
                        Узнать больше
                    </button>
                </header>
                <ul className='skills'>
                    <li className='skill'>
                        <img src='./svg/skills/main/order.svg' alt='order' />
                        <div className='skill-desc'>Удобный заказ на сайте</div>
                    </li>
                    <li className='skill'>
                        <img src='./svg/skills/main/ofice.svg' alt='ofice' />
                        <div className='skill-desc'>Нет необходимости ехать в офис</div>
                    </li>
                    <li className='skill'>
                        <img src='./svg/skills/main/net.svg' alt='net' />
                        <div className='skill-desc'>Огромный выбор направлений</div>
                    </li>
                </ul>
            </section>

            <section className='reviews framed'>
                <h2 className='section-title reviews-title'>Отзывы</h2>
                <ul className='reviews-content'>
                    <li className='review'>
                        <img
                            className='img review-img'
                            alt='kate-review'
                            src='./img/reviews/Kate.png'
                        />
                        <div className='review-content'>
                            <h3 className='review-title'>Екатерина Вальнова</h3>
                            <p className='review-desc'>
                                Доброжелательные подсказки на всех этапах помогут
                                правильно заполнить поля и без затруднений купить авиа или
                                ж/д билет, даже если вы заказываете онлайн билет впервые.
                            </p>
                        </div>
                    </li>
                    <li className='review'>
                        <img
                            className='img review-img'
                            alt='evgen-review'
                            src='./img/reviews/Eugene.png'
                        />
                        <div className='review-content'>
                            <h3 className='review-title'>Евгений Стрыкало</h3>
                            <p className='review-desc'>
                                СМС-сопровождение до посадки Сразу после оплаты ж/д
                                билетов и за 3 часа до отправления мы пришлем вам
                                СМС-напоминание о поездке.
                            </p>
                        </div>
                    </li>
                </ul>
                <ul className='slider'>
                    <li className='slider-item slider-item-active' />
                    <li className='slider-item' />
                    <li className='slider-item' />
                    <li className='slider-item' />
                    <li className='slider-item' />
                </ul>
            </section>
        </main>
    );
}
