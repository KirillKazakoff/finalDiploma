import React from 'react';

type SearchFormProps = { cls?: string; children: React.ReactNode };

export default function SearchForm({ cls, children }: SearchFormProps) {
    const onSubmit = (e: React.FormEvent) => {
        const form = e.currentTarget as HTMLFormElement;
        form.classList.add('submitted');

        e.preventDefault();

        if (form.checkValidity() === false) {
            console.log('hehe');
            return false;
        }
        return true;
    };

    return (
        <form
            noValidate onSubmit={onSubmit}
            className={`search-form ${cls}`}
        >
            {children}
        </form>
    );
}

SearchForm.defaultProps = {
    cls: '',
};
