import React, { useRef, useState } from 'react';

export default function Example() {
    const ref = useRef<HTMLButtonElement>(null);
    const [state, setState] = useState(0);

    const onClick = () => {
        console.log(state);
        setState(state + 1);
    };

    return (
        <button
            type='button' ref={ref}
            onClick={onClick}
        >
            Example
        </button>
    );
}
