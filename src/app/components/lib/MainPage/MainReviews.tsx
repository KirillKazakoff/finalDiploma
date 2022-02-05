import React from 'react';
import ReviewSlider from './ReviewSlider';

export default function MainReviews() {
    return (
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
                            Доброжелательные подсказки на всех этапах помогут правильно
                            заполнить поля и без затруднений купить авиа или ж/д билет,
                            даже если вы заказываете онлайн билет впервые.
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
                            СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и
                            за 3 часа до отправления мы пришлем вам СМС-напоминание о
                            поездке.
                        </p>
                    </div>
                </li>
            </ul>

            <ReviewSlider />
        </section>
    );
}
