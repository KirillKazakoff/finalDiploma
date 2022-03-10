import React from 'react';

export type SetStateT<T> = React.Dispatch<React.SetStateAction<T>>;

export type RefT<T> = React.MutableRefObject<T>;
export type RefDivT = RefT<HTMLDivElement>;
