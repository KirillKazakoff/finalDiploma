import React from 'react';

type SocialLinkProps = { href: string; children: React.ReactNode };

export default function SocialLink({ href, children }: SocialLinkProps) {
    return (
        <a href={href} className='social-link'>
            {children}
        </a>
    );
}
