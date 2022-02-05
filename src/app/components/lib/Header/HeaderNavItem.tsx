import React, { HTMLProps } from 'react';

type HeaderNavItemProps = HTMLProps<HTMLLinkElement>;

export default function HeaderNavItem({ href, children }: HeaderNavItemProps) {
    return (
        <li className='nav-item'>
            <a href={href} className='nav-link'>
                {children}
            </a>
        </li>
    );
}
