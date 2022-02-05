import React from 'react';
import HeaderNavItem from './HeaderNavItem';

export default function HeaderNav() {
    return (
        <nav className='nav'>
            <div className='logo logo-header'>Лого</div>
            <ul className='nav-list'>
                <HeaderNavItem href='/#'>О нас</HeaderNavItem>
                <HeaderNavItem href='/#'>Как это работает</HeaderNavItem>
                <HeaderNavItem href='/#'>Отзывы</HeaderNavItem>
                <HeaderNavItem href='/#'>Контакты</HeaderNavItem>
            </ul>
        </nav>
    );
}
