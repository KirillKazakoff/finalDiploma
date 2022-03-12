/* eslint-disable no-unused-vars */
import React from 'react';
import { OnMouseDownT, RefT, RefDivT } from './typesReact';

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
) => { onMouseDown: OnMouseDownT; values: { fromValue: number; toValue: number } };

export type SliderLimitsT = { min: number; max: number };
export type SliderValuesProps = {
    children: React.ReactNode;
    sliderRef: RefDivT;
    progressRef: RefDivT;
};
export type SliderValuesContainerProps = { children: React.ReactNode };
export type SliderValueProps = {
    circleRef: RefDivT;
    type: string;
    onMouseDown: OnMouseDownT;
    value: number;
};
