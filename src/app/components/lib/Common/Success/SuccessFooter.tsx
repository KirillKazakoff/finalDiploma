import React from 'react';
import { NavLink } from 'react-router-dom';
import SuccessRate from './SuccessRate';

export default function SuccessFooter() {
    return (
        <section className='success-popup-section success-popup-section-rate framed-success'>
            <div className='success-rate-container'>
                <span className='success-rate-desc'>Оценить сервис</span>
                <SuccessRate />

                <NavLink className='btn btn-success-back-to-main' to='/'>
                    Вернуться на главную
                </NavLink>
            </div>
        </section>
    );
}
