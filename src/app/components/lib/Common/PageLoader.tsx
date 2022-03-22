import React from 'react';
import '../../../../css/pageLoader.css';

type PageLoaderProps = { cls?: string };

export default function PageLoader({ cls }: PageLoaderProps) {
    return (
        <div className={`page-loader-container ${cls}`}>
            <span className='page-loader-desc'>Идет поиск</span>
            <div className='animation-area'>
                <div className='train-container train-container-before' />
                <div className='bg-loader bg-before' />
                <div className='bg-loader bg-after' />
            </div>
        </div>
    );
}

PageLoader.defaultProps = {
    cls: '',
};
