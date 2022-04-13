import React from 'react';

type Props = { children: React.ReactNode };

export default function PaymentHeader({ children }: Props) {
    return (
        <header className='passenger-header framed-passengers'>
            <span className='passenger-desc'>{children}</span>
        </header>
    );
}
