import React, { HTMLProps, useEffect } from 'react';

type Props = HTMLProps<HTMLInputElement> & { parentRef: any; validate: any };

export default function Input({
    parentRef,
    value,
    validate,
    className,
    ...props
}: Props) {
    const input = parentRef.current;

    useEffect(() => {
        if (!input) return;

        validate(input);
        console.log(input.name);
    }, [validate]);

    return (
        <input
            autoComplete='off'
            ref={parentRef}
            className={`input ${className}`}
            {...props}
        />
    );
}
