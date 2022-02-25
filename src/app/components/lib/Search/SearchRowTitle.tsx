import React from 'react';

type SearchRowTitleProps = { children: React.ReactNode };

export default function SearchRowTitle({ children }: SearchRowTitleProps) {
    return <h2 className='row-title search-row-title'>{children}</h2>;
}
