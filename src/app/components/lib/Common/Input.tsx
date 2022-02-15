import React, { HTMLProps, useEffect } from 'react';
import useValidateInput from '../../../forms/useValidateInput';

type Props = HTMLProps<HTMLInputElement> & { parentRef: any };

export default function Input({ parentRef, value, ...props }: Props) {
    const validateInput = useValidateInput();
    useEffect(() => {
        if (validateInput) validateInput(parentRef.current);
    }, [value]);

    return (
        <input
            autoComplete='off' ref={parentRef}
            {...props}
        />
    );
}
