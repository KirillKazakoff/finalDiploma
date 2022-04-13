import React from 'react';

type Props = { children: React.ReactNode; name: string };

export default function PaymentLabel({ children, name }: Props) {
    return (
        <label className='passenger-input-label label-payment' htmlFor={name}>
            {children}
        </label>
    );
}
