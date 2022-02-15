import React, { HTMLProps, useEffect } from 'react';
import useValidateInput from '../../../forms/useValidateInput';

type Props = HTMLProps<HTMLInputElement> & { parentRef: any; customValidate: any };

export default function Input({
    parentRef, value, customValidate, ...props
}: Props) {
    const validateInput = useValidateInput();
    const input = parentRef.current;

    useEffect(() => {
        if (!input) return;
        if (customValidate) {
            customValidate(input);
        }

        validateInput(input);
    }, [value, customValidate]);

    return (
        <input
            autoComplete='off' ref={parentRef}
            {...props}
        />
    );
}
