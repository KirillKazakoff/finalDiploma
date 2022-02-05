/* eslint-disable react/require-default-props */
import React from 'react';

type SearchFormBtnProps = { children: React.ReactNode; cls?: string };

export default function SearchFormBtn({ children, cls }: SearchFormBtnProps) {
    return (
        <button className={`btn search-tickets-btn ${cls}`} type='button'>
            {children}
        </button>
    );
}
