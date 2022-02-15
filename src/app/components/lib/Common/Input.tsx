import React, { HTMLProps } from 'react';

type Props = HTMLProps<HTMLInputElement>;

export default function Input(props: Props) {
    return <input autoComplete='off' {...props} />;
}
