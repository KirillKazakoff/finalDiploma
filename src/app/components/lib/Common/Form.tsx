import React from 'react';
import { FormPropsT, OnSubmitFormT } from '../../../types/typesForms';

export default function Form(props: FormPropsT) {
    const { cls, children, onSubmitForm } = props;

    const onSubmit: OnSubmitFormT = (e) => {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        form.classList.add('submitted');

        onSubmitForm(e);
    };

    return (
        <form
            noValidate onSubmit={onSubmit}
            className={`form ${cls}`}
        >
            {children}
        </form>
    );
}

Form.defaultProps = {
    cls: '',
};
