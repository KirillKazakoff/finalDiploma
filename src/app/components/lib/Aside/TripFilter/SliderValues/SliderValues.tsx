/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useState } from 'react';
import Example from './Example';
import useMove from './useMove';
import SliderValue from './SliderValue';
import SliderLabels from './SliderLabels';

type SliderValuesT = { min: number; max: number };

export default function SliderValues(props: SliderValuesT) {
    const bar = useRef<HTMLDivElement>(null);
    const progressBar = useRef<HTMLDivElement>(null);
    const circleFrom = useRef<HTMLDivElement>(null);
    const circleTo = useRef<HTMLDivElement>(null);

    const { min, max } = props;

    const refs = {
        bar,
        circleFrom,
        circleTo,
        progressBar,
    };
    const limits = { min, max };
    const { onMouseDown, toValue, fromValue } = useMove(refs, limits);

    return (
        <div className='slider-values-container'>
            <SliderLabels />
            <div className='slider-values slider-cost' ref={bar}>
                <div className='slider-progress' ref={progressBar} />
                <SliderValue
                    circleRef={circleFrom}
                    type='from'
                    value={fromValue}
                    onMouseDown={onMouseDown}
                />
                <SliderValue
                    circleRef={circleTo}
                    type='to'
                    value={toValue}
                    onMouseDown={onMouseDown}
                />
            </div>
            <span className='slider-flag-value'>{max}</span>
            <Example />
        </div>
    );
}
