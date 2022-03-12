/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useAppDispatch } from '../../../../../redux/reduxHooks';
import { UseMoveT } from '../../../../../types/typesTripFilter';
import { SetStateT } from '../../../../../types/typesReact';

const useMove: UseMoveT = (refs, limits) => {
    const dispatch = useAppDispatch();
    const { min, max } = limits;
    const [fromValue, setFrom] = useState(min);
    const [toValue, setTo] = useState(max);

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        const bar = refs.bar.current;
        const progressBar = refs.progressBar.current;
        const circleFrom = refs.circleFrom.current;
        const circleTo = refs.circleTo.current;

        const circle = e.currentTarget;
        const { id } = circle;
        const idInfo = id.split(' ');
        const name = idInfo[1];

        const barClient = bar.getBoundingClientRect();
        const circleClient = circle.getBoundingClientRect();

        const diffValue = max - min;
        const pxAmount = barClient.width;
        const coefValue = diffValue / pxAmount;

        const { left, right, width: circleWidth } = circleClient;
        const { left: barStartX, right: barEndX, width: barWidth } = barClient;
        const shiftLeft = e.clientX - left;
        const shiftRight = -(e.clientX - right);

        const onMouseMove = ({ pageX }: any) => {
            const fromClient = circleFrom.getBoundingClientRect();
            const toClient = circleTo.getBoundingClientRect();
            const { left: fromLeft, right: fromRight } = fromClient;
            const { left: toLeft, right: toRight } = toClient;

            const invadeBorders = pageX - shiftLeft < barStartX || pageX + shiftRight > barEndX;
            const leftMoreRight = circle.id !== circleTo.id && pageX - shiftLeft > toLeft;
            const rightMoreLeft = circle.id !== circleFrom.id && pageX + shiftRight < fromRight;
            const isRightSide = pageX > barWidth / 2 + barStartX;

            if (invadeBorders) return;
            if (leftMoreRight) return;
            if (rightMoreLeft) return;

            if (isRightSide) {
                circleFrom.style.zIndex = '1000';
                circleTo.style.zIndex = '0';
            } else {
                circleTo.style.zIndex = '1000';
                circleFrom.style.zIndex = '0';
            }

            const newPosition = pageX - barStartX - shiftLeft;
            circle.style.left = `${newPosition}px`;

            const toActualPosition = newPosition + circleWidth;
            const newFromValue = +(newPosition * coefValue + min).toFixed();
            let newToValue = +(toActualPosition * coefValue + min).toFixed();
            if (toActualPosition + 1 > barWidth) newToValue = max;

            const progressLeft = `${fromLeft - barStartX}px`;
            const progressRight = `${barEndX - toRight}px`;

            progressBar.style.left = progressLeft;
            progressBar.style.right = progressRight;

            if (circle.id.includes('from')) {
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

    const values = { fromValue, toValue };
    return { onMouseDown, values };
};

export default useMove;
