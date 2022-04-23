import React from 'react';
import { OnMouseT, RefDivT, SetStateT } from './typesReact';
import { SetSliderFilterT } from './typesPayload';

type OnMouseClosureT = (setValue: SetStateT<number>) => OnMouseT;

export type SliderRefsT = {
    bar: any;
    circleFrom: any;
    circleTo: any;
    progressBar: any;
};
export type UseMoveT = (
    refs: SliderRefsT,
    limits: {
        max: number;
        min: number;
    },
    setSliderFilter: SetSliderFilterT
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

export type SliderLimitProps = { children: React.ReactNode; refs: SliderRefsT };

export type SliderValueHourProps = SliderValueProps & {
    transform: (value: number) => string;
};

export type HourSliderProps = {
    setSliderFilter: SetSliderFilterT;
    dir: 'from' | 'to';
    desc: string;
    limits: SliderLimitsT;
    typeFrom: string;
    typeTo: string;
};
