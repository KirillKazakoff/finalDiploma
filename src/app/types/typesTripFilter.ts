/* eslint-disable no-unused-vars */
import React from 'react';
import { OnMouseDownT, RefDivT, SetStateT } from './typesReact';

type OnMouseClosureT = (setValue: SetStateT<number>) => OnMouseDownT;

export type UseMoveT = (
    refs: {
        bar: any;
        circleFrom: any;
        circleTo: any;
        progressBar: any;
    },
    limits: {
        max: number;
        min: number;
    }
) => OnMouseClosureT;

export type SliderLimitsT = { min: number; max: number };
export type SliderValuesProps = {
    children: React.ReactNode;
    sliderRef: RefDivT;
    progressRef: RefDivT;
};
export type SliderValuesContainerProps = { children: React.ReactNode };
export type SliderValueProps = {
    initValue: number;
    circleRef: RefDivT;
    type: string;
    onMouseClosure: OnMouseClosureT;
};
