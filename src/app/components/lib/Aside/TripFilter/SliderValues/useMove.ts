/* eslint-disable max-len */
import { useAppDispatch } from '../../../../../redux/reduxHooks';
import { UseMoveT } from '../../../../../types/typesTripFilter';
import { setFilter } from '../../../../../redux/slices/searchFilterSlice';
import { SetStateT, OnMouseT } from '../../../../../types/typesReact';
import {
    removeListeners, addListeners, getClients, refocus,
} from './moveUtils';

const useMove: UseMoveT = (refs, limits) => {
    const dispatch = useAppDispatch();
    const { min, max } = limits;

    const onMouseDownClosure = (setValue: SetStateT<number>) => {
        const onMouseDown: OnMouseT = (eDown) => {
            const bar = refs.bar.current;
            const progressBar = refs.progressBar.current;
            const circleFrom = refs.circleFrom.current;
            const circleTo = refs.circleTo.current;

            const circle = eDown.currentTarget;
            const { id } = circle;
            const idInfo = id.split(' ');
            const name = idInfo[1];
            let dispatchValue = 0;

            const barClient = bar.getBoundingClientRect();
            const circleClient = circle.getBoundingClientRect();

            const diffValue = max - min;
            const pxAmount = barClient.width;
            const coefValue = diffValue / pxAmount;

            const { left, right, width: circleWidth } = circleClient;
            const { left: barStartX, right: barEndX, width: barWidth } = barClient;
            const shiftLeft = eDown.clientX - left;
            const shiftRight = -(eDown.clientX - right);

            const onMouseMove: OnMouseT = (eMove) => {
                const { pageX } = eMove;
                const { from, to } = getClients(circleFrom, circleTo);

                const invadeBorders = pageX - shiftLeft < barStartX || pageX + shiftRight > barEndX;
                const leftMoreRight = circle.id !== circleTo.id && pageX - shiftLeft > to.left;
                const rightMoreLeft = circle.id !== circleFrom.id && pageX + shiftRight < from.right;
                const isRightSide = pageX > barWidth / 2 + barStartX;

                if (invadeBorders) return;
                if (leftMoreRight) return;
                if (rightMoreLeft) return;

                if (isRightSide) {
                    refocus(circleFrom, circleTo);
                } else {
                    refocus(circleTo, circleFrom);
                }

                const newPosition = pageX - barStartX - shiftLeft;
                circle.style.left = `${newPosition}px`;

                const toActualPosition = newPosition + circleWidth;
                const newFromValue = +(newPosition * coefValue + min).toFixed();
                let newToValue = +(toActualPosition * coefValue + min).toFixed();
                if (toActualPosition + 1 > barWidth) newToValue = max;

                const progressLeft = `${from.left - barStartX}px`;
                const progressRight = `${barEndX - to.rigth}px`;

                progressBar.style.left = progressLeft;
                progressBar.style.right = progressRight;

                if (circle.id.includes('from')) {
                    dispatchValue = newFromValue;
                    setValue(newFromValue);
                } else {
                    dispatchValue = newToValue;
                    setValue(newToValue);
                }
            };

            const onMouseUp = () => {
                dispatch(setFilter({ name, value: dispatchValue }));
                removeListeners(onMouseMove, onMouseUp);
            };
            addListeners(onMouseMove, onMouseUp);
        };

        return onMouseDown;
    };

    return onMouseDownClosure;
};

export default useMove;
