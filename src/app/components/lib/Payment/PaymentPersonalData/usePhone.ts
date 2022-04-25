/* eslint-disable no-param-reassign */
import React, { FormEvent, useState } from 'react';
import { setInput } from '../../../../redux/slices/paymentFieldsSlice';
import useChange from '../../Common/Form/useChange';

const codeCheck = (code: number) => {
    if (code < 48 || code > 57) return false;
    return true;
};

export const getNumbersAmount = (value: string) => {
    return value.split('').reduce<number>((total, letter) => {
        const code = letter.charCodeAt(0);

        if (codeCheck(code)) total += 1;
        return total;
    }, 0);
};

export const getNumbersPosition = (value: string) => {
    return value.split('').reduce<number[]>((total, letter, i) => {
        const code = letter.charCodeAt(0);

        if (codeCheck(code)) {
            total.push(i);
        }
        return total;
    }, []);
};

export const changePhone = (phone: string) => {
    const copy = phone;

    const lastCode = phone.charCodeAt(phone.length - 1);
    if (lastCode === 32) return copy;

    const checkpoints = [1, 4, 7, 9];
    const numbersAmount = getNumbersPosition(copy);
    const arrPhone = copy.split('');

    checkpoints.forEach((point) => {
        const index = numbersAmount[point] - 1;
        if (Number.isNaN(index)) return;

        if (arrPhone[index] !== ' ') {
            arrPhone.splice(index + 1, 0, ' ');
        }
    });

    return arrPhone.join('');
};

export const usePhone = (phone: string) => {
    const [backActive, setBack] = useState(false);

    const onKeyDown = (e: React.KeyboardEvent) => {
        const code = e.key.charCodeAt(0);

        const arrow = 65;
        const plus = 43;
        const inNumbersArea = code < 48 || code > 57;

        if (code === plus && phone.length === 0) return;
        if (e.code === 'Tab') return;
        if (e.code === 'Backspace') {
            setBack(true);
            return;
        }
        if (code === arrow) return;
        if (inNumbersArea) e.preventDefault();
        if (getNumbersAmount(phone) > 10) e.preventDefault();
    };

    const onKeyUp = (e: React.KeyboardEvent) => {
        const code = e.key.charCodeAt(0);
        const backspacesPushed = code === 66 || code === 77;
        if (backspacesPushed) setBack(false);
    };

    const onChangeH = useChange(setInput);
    const onChange = (e: FormEvent<HTMLInputElement>) => {
        if (backActive) {
            onChangeH(e);
            return;
        }

        e.currentTarget.value = changePhone(e.currentTarget.value);
        onChangeH(e);
    };

    return { onKeyDown, onKeyUp, onChange };
};
