import React from 'react';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { SearchFormProps } from '../../../types/typesSearch';

export default function Form({ cls, children, setFormMsgHidden }: SearchFormProps) {
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

Form.defaultProps = {
    cls: '',
};
