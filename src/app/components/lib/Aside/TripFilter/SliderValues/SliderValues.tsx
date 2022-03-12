import React from 'react';
import type { SliderValuesProps } from '../../../../../types/typesTripFilter';

export default function SliderValues(props: SliderValuesProps) {
    const { sliderRef, progressRef, children } = props;

    return (
        <div className='slider-values slider-cost' ref={sliderRef}>
            <div className='slider-progress' ref={progressRef} />
            {children}
        </div>
    );
}
