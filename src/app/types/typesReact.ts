import React from 'react';

export type DivT = HTMLDivElement;
export type BtnT = HTMLButtonElement;
export type SetStateT<T> = React.Dispatch<React.SetStateAction<T>>;

export type RefT<T> = React.MutableRefObject<T>;
export type RefDivT = RefT<DivT>;

export type OnMouseT = (e: React.MouseEvent<DivT>) => void;
