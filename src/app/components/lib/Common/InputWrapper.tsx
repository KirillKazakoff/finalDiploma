/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { HTMLProps } from 'react';

type InputWrapperProps = {
    children: React.ReactNode;
    cls?: string;
} & HTMLProps<HTMLDivElement>;

export default function InputWrapper({ children, cls, onClick }: InputWrapperProps) {
    return (
        <div onClick={onClick} className={`input-wrapper ${cls}`}>
            {children}
        </div>
    );
}

InputWrapper.defaultProps = {
    cls: '',
};
