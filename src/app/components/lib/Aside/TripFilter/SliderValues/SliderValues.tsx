/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useState } from 'react';
import { useAppDispatch } from '../../../../../redux/reduxHooks';
import { setPrice } from '../../../../../redux/slices/searchFilterSlice';

type SliderValuesT = { min: number; max: number };

export default function SliderValues(props: SliderValuesT) {
    const dispatch = useAppDispatch();

    const bar = useRef<HTMLDivElement>(null);
    const progressBar = useRef<HTMLDivElement>(null);
    const circleFrom = useRef<HTMLDivElement>(null);
    const circleTo = useRef<HTMLDivElement>(null);

    const { min, max } = props;

    const [fromValue, setFrom] = useState(min);
    const [toValue, setTo] = useState(max);

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();

        const circle = e.currentTarget;
        const circleClient = circle.getBoundingClientRect();
        const barClient = bar.current.getBoundingClientRect();

        const diffValue = max - min;
        const pxAmount = barClient.width;
        const coefValue = diffValue / pxAmount;

        const { left, right, width: circleWidth } = circleClient;
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

            const toActualPosition = newPosition + circleWidth;
            const newFromValue = +(newPosition * coefValue + min).toFixed();
            let newToValue = +(toActualPosition * coefValue + min).toFixed();

            if (toActualPosition + 1 > barWidth) newToValue = max;

            const fromClient = circleFrom.current.getBoundingClientRect();
            const toClient = circleTo.current.getBoundingClientRect();

            const progressLeft = `${fromClient.left - barStartX}px`;
            const progressRight = `${barEndX - toClient.right}px`;
            console.log(progressLeft, progressRight);

            progressBar.current.style.left = progressLeft;
            progressBar.current.style.right = progressRight;

            if (circle.id === 'from') {
                setFrom(newFromValue);
            } else {
                setTo(newToValue);
            }
        };

        document.addEventListener('mousemove', onMouseMove);

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('contextmenu', onMouseUp);
        };
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('contextmenu', onMouseUp);
    };

    const onDragStart = (e: React.DragEvent) => e.preventDefault();

    return (
        <div className='slider-values-container'>
            <div className='slider-labels'>
                <span className='slider-label'>от</span>
                <span className='slider-label'>до</span>
            </div>
            <div className='slider-values slider-cost' ref={bar}>
                <div className='slider-progress' ref={progressBar} />
                <div
                    className='slider-value-container slider-value-container-from'
                    onMouseDown={onMouseDown}
                    onDragStart={onDragStart}
                    id='from'
                    ref={circleFrom}
                >
                    <div className='slider-value-circle' />
                    <span className='slider-value-desc'>{fromValue}</span>
                </div>
                <div
                    className='slider-value-container slider-value-container-to'
                    onMouseDown={onMouseDown}
                    onDragStart={onDragStart}
                    id='to'
                    ref={circleTo}
                >
                    <div className='slider-value-circle' />
                    <span className='slider-value-desc'>{toValue}</span>
                </div>
            </div>
            {/* <span className='slider-flag-value'>{max}</span> */}
        </div>
    );
}
