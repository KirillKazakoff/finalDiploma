import React from 'react';
import './pageLoader.css';

type PageLoaderProps = { cls?: string; desc: string };

export default function PageLoader({ cls, desc }: PageLoaderProps) {
    return (
        <div className={`page-loader-container ${cls}`}>
            <span className='page-loader-desc'>{desc}</span>
            <div className='animation-area'>
                <div className='train-container' />
                <div className='bg-loader bg-before' />
                <div className='bg-loader bg-after' />
            </div>
        </div>
    );
}

PageLoader.defaultProps = {
    cls: '',
};
