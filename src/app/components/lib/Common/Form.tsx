import React from 'react';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { FormPropsT, OnSubmitFormT } from '../../../types/typesForms';

export default function Form(props: FormPropsT) {
    const dispatch = useAppDispatch();
    const {
        cls, children, setFormMsgHidden, onSubmitForm,
    } = props;

    const onSubmit: OnSubmitFormT = (e) => {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        form.classList.add('submitted');
        dispatch(setFormMsgHidden(false));

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
