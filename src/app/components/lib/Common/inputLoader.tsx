import React from 'react';

type InputLoaderProps = { cls?: string };

export default function InputLoader({ cls }: InputLoaderProps) {
    return (
        <div className={`sk-chase ${cls}`}>
            <div className='sk-chase-dot' />
            <div className='sk-chase-dot' />

            <div className='sk-chase-dot' />
            <div className='sk-chase-dot' />
            <div className='sk-chase-dot' />
        </div>
    );
}

InputLoader.defaultProps = {
    cls: '',
};
