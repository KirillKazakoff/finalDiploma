import React from 'react';
import '../../../../css/pageLoader.css';

export default function PageLoader() {
    return (
        <div className='page-loader-container'>
            <span className='page-loader-desc'>Идет поиск</span>
            <div className='animation-area'>
                <div className='train-container train-container-before'>
                    <img
                        src='../../../../svg/train-loader.svg'
                        className='page-loader'
                        alt='train-loader'
                    />
                </div>

                <div className='train-container train-container-after'>
                    <img
                        src='../../../../svg/train-loader.svg'
                        className='page-loader'
                        alt='train-loader'
                    />
                </div>
                <div className='page-loader-line' />
                <div className='bg-loader bg-before' />
                <div className='bg-loader bg-after' />
            </div>
        </div>
    );
}
