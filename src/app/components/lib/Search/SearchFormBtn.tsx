import React from 'react';

type SearchFormBtnProps = { children: React.ReactNode; cls?: string };

export default function SearchFormBtn({ children, cls }: SearchFormBtnProps) {
    let className = 'search-tickets-btn';
    if (cls) className = `btn ${className} ${className}-${cls}`;

    return (
        <button className={className} type='submit'>
            {children}
        </button>
    );
}

SearchFormBtn.defaultProps = {
    cls: '',
};
