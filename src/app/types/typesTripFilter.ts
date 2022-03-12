/* eslint-disable no-unused-vars */
import React from 'react';
import { OnMouseDownT } from './typesReact';

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
export type SliderValuesContainerProps = { children: React.ReactNode };
