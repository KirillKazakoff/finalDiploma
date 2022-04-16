import React from 'react';

type Props = { status: string; children: string };

export default function FormFeedbackDesc({ status, children }: Props) {
    return (
        <span className={`form-feedback-desc form-feedback-desc-${status}`}>
            {children}
        </span>
    );
}
