/* eslint-disable react/require-default-props */
import React from 'react';

type SearchFormRowProps = { children: React.ReactNode; cls?: string };

export default function SearchFormRow({ children, cls }: SearchFormRowProps) {
    return <div className={`search-form-row ${cls}`}>{children}</div>;
}
