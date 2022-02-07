import React from 'react';

type InputWrapperProps = { children: React.ReactNode; cls?: string };

export default function InputWrapper({ children, cls }: InputWrapperProps) {
    return <div className={`input-wrapper ${cls}`}>{children}</div>;
}

InputWrapper.defaultProps = {
    cls: '',
};
