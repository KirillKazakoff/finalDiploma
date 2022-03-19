/* eslint-disable no-param-reassign */
import { DivT } from '../../../../../types/typesReact';
import { SliderLimitsT } from '../../../../../types/typesTripFilter';
// type ListenersT = (onMouseMove: any, onMouseUp: any ) => void;
export const removeListeners = (onMouseMove: any, onMouseUp: any) => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('contextmenu', onMouseUp);
};

export const addListeners = (onMouseMove: any, onMouseUp: any) => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('contextmenu', onMouseUp);
};

export const getClients = (circleFrom: DivT, circleTo: DivT) => {
    const fromClient = circleFrom.getBoundingClientRect();
    const toClient = circleTo.getBoundingClientRect();

    const from = { left: fromClient.left, right: fromClient.right };
    const to = { left: toClient.left, rigth: toClient.right };
    return { from, to };
};

export const refocus = (focusedCircle: DivT, prevCircle: DivT) => {
    focusedCircle.style.zIndex = '1000';
    prevCircle.style.zIndex = '0';
};

export const getInitDispatchValue = (circle: DivT, limits: SliderLimitsT) => {
    // const {min, max} = limits;
    // if (circle.id[0] === 'from') return min;
};
