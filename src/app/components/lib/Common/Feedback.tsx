import React from 'react';

type FeedbackProps = { type: string; error: string; wasFocused: boolean };

export default function Feedback({ type, error, wasFocused }: FeedbackProps) {
    if (!error || !wasFocused) return null;

    return <div className={`feedback feedback-${type}`}>{error}</div>;
}
