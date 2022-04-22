import React from 'react';
import HeaderNavItem from './HeaderNavItem';

export default function HeaderNav() {
    return (
        <nav className='nav'>
            <div className='logo logo-header'>Лого</div>
            <ul className='nav-list'>
                <HeaderNavItem href='/#scroll-to'>О нас</HeaderNavItem>
                <HeaderNavItem href='/#description'>Как это работает</HeaderNavItem>
                <HeaderNavItem href='/#reviews'>Отзывы</HeaderNavItem>
                <HeaderNavItem href='/#contacts'>Контакты</HeaderNavItem>
            </ul>
        </nav>
    );
}
