import React from 'react';

type FooterTopColProps = { children: React.ReactNode };

export default function FooterTopCol({ children }: FooterTopColProps) {
    return <div className='footer-top-col'>{children}</div>;
}
