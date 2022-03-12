import React, { useRef } from 'react';
import onClickClosure from './onClickExample.ts';

export default function Example() {
    const ref = useRef<HTMLButtonElement>(null);
    const onClick = onClickClosure(ref);
    return (
        <button
            type='button' ref={ref}
            onClick={onClick}
        >
            Example
        </button>
    );
}
