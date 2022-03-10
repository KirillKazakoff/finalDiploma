/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef } from 'react';

type SliderValuesT = { fromValue: number; toValue: number; maxValue: number };

export default function SliderValues(props: SliderValuesT) {
    const bar = useRef<HTMLDivElement>(null);
    const circleFrom = useRef<HTMLDivElement>(null);
    const circleTo = useRef<HTMLDivElement>(null);

    const { fromValue, toValue, maxValue } = props;

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();

        const circle = e.currentTarget;
        const circleClient = circle.getBoundingClientRect();
        const barClient = bar.current.getBoundingClientRect();

        const { left, right } = circleClient;
        const { left: barStartX, right: barEndX, width: barWidth } = barClient;
        const shiftLeft = e.clientX - left;
        const shiftRight = -(e.clientX - right);

        const onMouseMove = ({ pageX }: any) => {
            const from = circleFrom.current.getBoundingClientRect().right;
            const to = circleTo.current.getBoundingClientRect().left;

            const invadeBorders = pageX - shiftLeft < barStartX || pageX + shiftRight > barEndX;
            const leftMoreRight = circle.id !== circleTo.current.id && pageX - shiftLeft > to;
            const rightMoreLeft = circle.id !== circleFrom.current.id && pageX + shiftRight < from;
            const isRightSide = pageX > barWidth / 2 + barStartX;

            if (invadeBorders) return;
            if (leftMoreRight) return;
            if (rightMoreLeft) return;

            if (isRightSide) {
                circleFrom.current.style.zIndex = '1000';
                circleTo.current.style.zIndex = '0';
            } else {
                circleTo.current.style.zIndex = '1000';
                circleFrom.current.style.zIndex = '0';
            }

            const newPosition = pageX - barStartX - shiftLeft;

            circle.style.left = `${newPosition}px`;
        };

        document.addEventListener('mousemove', onMouseMove);

        document.onmouseup = () => {
            document.removeEventListener('mousemove', onMouseMove);
            circle.onmouseup = null;
        };
    };

    const onDragStart = (e: React.DragEvent) => e.preventDefault();

    return (
        <div className='slider-values-container'>
            <div className='slider-labels'>
                <span className='slider-label'>от</span>
                <span className='slider-label'>до</span>
            </div>
            <div className='slider-values slider-cost' ref={bar}>
                <div
                    className='slider-value-container slider-value-container-from'
                    onMouseDown={onMouseDown}
                    onDragStart={onDragStart}
                    id='1'
                    ref={circleFrom}
                >
                    <div className='slider-value-circle' />
                    <span className='slider-value-desc'>{fromValue}</span>
                </div>
                <div
                    className='slider-value-container slider-value-container-to'
                    onMouseDown={onMouseDown}
                    onDragStart={onDragStart}
                    id='2'
                    ref={circleTo}
                >
                    <div className='slider-value-circle' />
                    <span className='slider-value-desc'>{toValue}</span>
                </div>
            </div>
            <span className='slider-flag-value'>{maxValue}</span>
        </div>
    );
}
