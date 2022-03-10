/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { RefDivT } from '../../../../../types/typesReact';
import { OnMouseDownT } from './useMove';

type SliderValueProps = {
    ref: RefDivT;
    type: string;
    initValue: number;
    onMouseDown: OnMouseDownT;
};

export default function SliderValue(props: SliderValueProps) {
    const {
        ref, type, initValue, onMouseDown,
    } = props;

    const onDragStart = (e: React.DragEvent) => e.preventDefault();
    const [value, setValue] = useState(initValue);

    return (
        <div
            className={`slider-value-container slider-value-container-${type}`}
            onMouseDown={onMouseDown}
            onDragStart={onDragStart}
            id={type}
            ref={ref}
        >
            <div className='slider-value-circle' />
            <span className='slider-value-desc'>{value}</span>
        </div>
    );
}
