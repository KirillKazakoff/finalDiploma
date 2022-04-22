import { HashLink as Link } from 'react-router-hash-link';
import React, { HTMLProps } from 'react';

type HeaderNavItemProps = HTMLProps<HTMLLinkElement>;

export default function HeaderNavItem({ href, children }: HeaderNavItemProps) {
    return (
        <Link to={href} className='nav-link'>
            {children}
        </Link>
    );
}
