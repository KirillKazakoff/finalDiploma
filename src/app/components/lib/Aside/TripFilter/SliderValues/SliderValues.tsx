import React from 'react';
import type { SliderValuesProps } from '../../../../../types/typesTripFilter';

export default function SliderValues(props: SliderValuesProps) {
    const {
        sliderRef, progressRef, children, cls,
    } = props;

    return (
        <div className={`slider-values ${cls}`} ref={sliderRef}>
            <div className={`slider-progress ${cls}`} ref={progressRef} />
            {children}
        </div>
    );
}
