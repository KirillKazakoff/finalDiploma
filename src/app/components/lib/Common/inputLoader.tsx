import React from 'react';
import { Status } from '../../../types';

type Props = { status: Status };

export default function InputLoader() {
    return (
        <div className='sk-chase'>
            <div className='sk-chase-dot' />
            <div className='sk-chase-dot' />

            <div className='sk-chase-dot' />
            <div className='sk-chase-dot' />
        </div>
    );
}
