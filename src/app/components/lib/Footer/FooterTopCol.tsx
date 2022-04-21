import React from 'react';

type FooterTopColProps = { children: React.ReactNode; cls?: string };

export default function FooterTopCol({ children, cls }: FooterTopColProps) {
    return <div className={`footer-top-col ${cls}`}>{children}</div>;
}

FooterTopCol.defaultProps = {
    cls: '',
};
