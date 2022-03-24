import React from 'react';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { FormPropsT, OnSubmitFormT } from '../../../types/typesForms';

export default function Form(props: FormPropsT) {
    const dispatch = useAppDispatch();
    const {
        cls, children, setFormMsgHidden, onSubmitForm, status,
    } = props;

    const onSubmit: OnSubmitFormT = (e) => {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        form.classList.add('submitted');
        // if (status === 'error') {
        //     dispatch(setFormMsgHidden(false));
        // }
        // if (status === 'success') {
        //     dispatch(setFormMsgHidden(true));
        // }

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
