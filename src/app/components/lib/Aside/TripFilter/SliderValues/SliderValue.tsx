/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import type { SliderValueProps } from '../../../../../types/typesTripFilter';

export default function SliderValue(props: SliderValueProps) {
    const {
        circleRef, type, onMouseDown, value,
    } = props;

    const onDragStart = (e: React.DragEvent) => e.preventDefault();

    return (
        <div
            className={`slider-value-container slider-value-container-${type}`}
            onMouseDown={onMouseDown}
            onDragStart={onDragStart}
            id={type}
            ref={circleRef}
        >
            <div className='slider-value-circle' />
            <span className='slider-value-desc'>{value}</span>
        </div>
    );
}
