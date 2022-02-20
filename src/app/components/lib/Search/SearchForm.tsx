import React from 'react';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { setFormMsgHidden } from '../../../redux/slices/searchFormSlice';

type SearchFormProps = { cls?: string; children: React.ReactNode };

export default function SearchForm({ cls, children }: SearchFormProps) {
    const dispatch = useAppDispatch();

    const onSubmit = (e: React.FormEvent) => {
        const form = e.currentTarget as HTMLFormElement;
        form.classList.add('submitted');

        dispatch(setFormMsgHidden(false));
        e.preventDefault();
    };

    return (
        <form
            noValidate onSubmit={onSubmit}
            className={`form search-form ${cls}`}
        >
            {children}
        </form>
    );
}

SearchForm.defaultProps = {
    cls: '',
};
