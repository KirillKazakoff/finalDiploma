import React from 'react';
import '../../../../css/trainLoader.css';

export default function TrainLoader() {
    return (
        <div className='train-loader'>
            <span className='train-loader-desc'>Идет поиск</span>
            <img src='../../../../svg/train-loader.svg' alt='train-loader' />
        </div>
    );
}
