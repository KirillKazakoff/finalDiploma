import React, { useRef } from 'react';
import useMove from './useMove';
import SliderValue from './SliderValue';
import type { SliderLimitsT } from '../../../../../types/typesTripFilter';

export default function SliderValues(props: SliderLimitsT) {
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
    const { onMouseDown, values } = useMove(refs, limits);

    return (
        <div className='slider-values slider-cost' ref={bar}>
            <div className='slider-progress' ref={progressBar} />
            <SliderValue
                circleRef={circleFrom}
                type='from'
                value={values.fromValue}
                onMouseDown={onMouseDown}
            />
            <SliderValue
                circleRef={circleTo}
                type='to'
                value={values.toValue}
                onMouseDown={onMouseDown}
            />
        </div>
    );
}
