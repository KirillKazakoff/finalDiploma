import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import { setFormValidated, selectFormState } from '../../../redux/slices/searchFormSlice';
import FormFeedback from '../Common/FormFeedback';
import SearchFormFeedback from './SearchFormFeedback';

type SearchFormProps = { cls?: string; children: React.ReactNode };

export default function SearchForm({ cls, children }: SearchFormProps) {
    const dispatch = useAppDispatch();

    const onSubmit = (e: React.FormEvent) => {
        const form = e.currentTarget as HTMLFormElement;
        form.classList.add('submitted');

        dispatch(setFormValidated(true));
        e.preventDefault();

        if (form.checkValidity() === false) {
            return false;
        }
        console.log('ok');
        return true;
    };

    return (
        <form
            noValidate onSubmit={onSubmit}
            className={`form search-form ${cls}`}
        >
            {children}
            <SearchFormFeedback />
        </form>
    );
}

SearchForm.defaultProps = {
    cls: '',
};
