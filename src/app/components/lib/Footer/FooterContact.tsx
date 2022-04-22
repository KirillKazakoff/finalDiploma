import React from 'react';

type Props = { href: string; icon: React.ReactNode; desc: string };

export default function FooterContact(props: Props) {
    const { href, icon, desc } = props;

    return (
        <a className='contact-link' href={href}>
            <div className='contact-link-wrapper'>
                <div className='contact-link-icon'>{icon}</div>
                <span className='contact-link-desc'>{desc}</span>
            </div>
        </a>
    );
}
