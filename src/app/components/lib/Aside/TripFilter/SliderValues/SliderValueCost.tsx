/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import type { SliderValueProps } from '../../../../../types/typesTripFilter';

export default function SliderValueCost(props: SliderValueProps) {
    const {
        circleRef, type, onMouseClosure, initValue,
    } = props;

    const onDragStart = (e: React.DragEvent) => e.preventDefault();

    const [value, setValue] = useState(initValue);
    const onMouseDown = onMouseClosure(setValue);

    return (
        <div
            className={`slider-value-container slider-value-container-cost slider-value-container-${type}`}
            onMouseDown={onMouseDown}
            onDragStart={onDragStart}
            id={type}
            ref={circleRef}
        >
            <div className='slider-value-circle slider-value-circle-cost' />
            <span className='slider-value-desc'>{value}</span>
        </div>
    );
}
