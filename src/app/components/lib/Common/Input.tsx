import React, { HTMLProps, useEffect } from 'react';

type Props = HTMLProps<HTMLInputElement> & { parentRef: any; validate: any };

export default function Input({
    parentRef, value, validate, ...props
}: Props) {
    const input = parentRef.current;

    useEffect(() => {
        if (!input) return;

        validate(input);
    }, [value, validate]);

    return (
        <input
            autoComplete='off' ref={parentRef}
            {...props}
        />
    );
}
