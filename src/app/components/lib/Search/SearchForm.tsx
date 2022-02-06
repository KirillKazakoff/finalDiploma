import React from 'react';

type SearchFormProps = { cls: string; children: React.ReactNode };

export default function SearchForm({ cls, children }: SearchFormProps) {
    return <form className={cls}>{children}</form>;
}
