import React from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectUserInfo } from '../../../../redux/slices/utils/selectUserInfo';

export default function SuccessFarewell() {
    const userInfo = useAppSelector(selectUserInfo);
    const userName = `${userInfo.first_name} ${userInfo.patronymic}`;

    return (
        <section className='success-popup-section success-popup-section-appeal framed-success'>
            <div className='success-appeal-container'>
                <h2 className='success-greeting'>{`${userName} !`}</h2>
                <span className='success-info'>
                    Ваш заказ успешно оформлен. В ближайшее время с вами свяжется наш
                    оператор для подтверждения.
                </span>
            </div>
            <footer className='success-appeal-footer'>
                <span className='success-thanks'>
                    Благодарим Вас за оказанное доверие и желаем приятного путешествия!
                </span>
            </footer>
        </section>
    );
}
