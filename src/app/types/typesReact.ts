/* eslint-disable no-unused-vars */
import React from 'react';

export type SetStateT<T> = React.Dispatch<React.SetStateAction<T>>;

export type RefT<T> = React.MutableRefObject<T>;
export type RefDivT = RefT<HTMLDivElement>;

export type OnMouseDownT = (e: React.MouseEvent<HTMLDivElement>) => void;
