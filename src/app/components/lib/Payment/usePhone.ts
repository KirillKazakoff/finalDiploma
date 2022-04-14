/* eslint-disable no-param-reassign */
// /* eslint-disable no-param-reassign */
// import { useEffect, useRef, useState } from 'react';
// import { useSetInput } from '../../../form/useSetInput';
// import { setInput } from '../../../redux/slices/paymentFieldsSlice';
// import { InputState } from '../../../redux/slices/utils/reduxInputUtils';

import { useRef, useEffect } from 'react';
import { InputState } from '../../../redux/slices/utils/reduxInputUtils';

export const usePhone = (inputState: InputState) => {
    const copyState = { ...inputState };
    const copyRef = useRef(copyState);

    const keyListener = (e: KeyboardEvent) => {
        // console.log(e.code.charCodeAt(0));

        copyRef.current.value += e.key;
    };

    useEffect(() => {
        const removeKeyListener = () => {
            document.removeEventListener('keydown', keyListener);
        };

        const addKeyListener = () => {
            document.addEventListener('keydown', keyListener);
        };

        addKeyListener();
        return () => removeKeyListener();
    });

    return copyRef.current;
};

const codeCheck = (code: number) => {
    if (code < 48 || code > 57) return false;
    return true;
};

const getNumbersAmount = (value: string) => {
    return value.split('').reduce<number>((total, letter, i) => {
        const code = letter.charCodeAt(0);

        if (codeCheck(code)) total += 1;
        return total;
    }, 0);
};

export const changePhone = (copy: InputState) => {
    const { value } = copy;
    if (value.length === 0) return;

    const lastCode = value.charCodeAt(value.length - 1);
    // console.log(lastCode);

    if (value.length === 1 && lastCode === 43) return;

    if (lastCode < 48 || lastCode > 57) {
        copy.value = value.substring(0, value.length - 1);
        copy.value.trim();
        console.log(copy.value);
    }

    const numbersAmount = getNumbersAmount(value);
    // console.log(numbersAmount);
    if (numbersAmount === 1) {
        copy.value += ' ';
    }

    if (numbersAmount === 4) {
        copy.value += ' ';
    }
};
