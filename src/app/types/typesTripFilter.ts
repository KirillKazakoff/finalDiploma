/* eslint-disable no-unused-vars */
import React from 'react';
import { OnMouseT, RefDivT, SetStateT } from './typesReact';

type OnMouseClosureT = (setValue: SetStateT<number>) => OnMouseT;

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
    cls: string;
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

export type HourSliderProps = { dir: 'from' | 'to'; desc: string; limits: SliderLimitsT };
