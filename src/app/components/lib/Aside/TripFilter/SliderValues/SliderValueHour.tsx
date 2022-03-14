/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { SliderValueHourProps } from '../../../../../types/typesTripFilter';

export default function SliderValueHour(props: SliderValueHourProps) {
    const {
        circleRef, type, onMouseClosure, initValue, transform,
    } = props;

    const onDragStart = (e: React.DragEvent) => e.preventDefault();

    const [value, setValue] = useState(initValue);
    const onMouseDown = onMouseClosure(setValue);
    const transformed = transform(value);

    return (
        <div
            className={`slider-value-container slider-value-container-hour slider-value-container-${type}`}
            onMouseDown={onMouseDown}
            onDragStart={onDragStart}
            id={type}
            ref={circleRef}
        >
            <div className='slider-value-circle slider-value-circle-hour' />
            <span className='slider-value-desc'>{transformed}</span>
        </div>
    );
}
