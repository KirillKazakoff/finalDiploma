import React from 'react';

export default function SliderValues() {
    return (
        <div className='slider-values-container'>
            <div className='slider-labels'>
                <span className='slider-label'>от</span>
                <span className='slider-label'>до</span>
            </div>
            <div className='slider-values slider-cost'>
                <div className='slider-value-container slider-value-container-from'>
                    <div className='slider-value-circle' />
                    <span className='slider-value-desc'>1920</span>
                </div>
                <div className='slider-value-container slider-value-container-to'>
                    <div className='slider-value-circle' />
                    <span className='slider-value-desc'>7000</span>
                </div>
            </div>
            <span className='slider-flag-value'>7000</span>
        </div>
    );
}
