import React from 'react';
import { SliderValuesContainerProps } from '../../../../../types/typesTripFilter';

export default function SliderValuesContainer({ children }: SliderValuesContainerProps) {
    return <div className='slider-values-container'>{children}</div>;
}
