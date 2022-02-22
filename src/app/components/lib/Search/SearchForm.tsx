import React from 'react';
import { useAppSelector } from '../../../redux/reduxHooks';
import { setFormMsgHidden } from '../../../redux/slices/searchFormSlice';
import { OnSubmitFormT } from '../../../types/typesForms';
import { SearchFormProps } from '../../../types/typesSearch';
import Form from '../Common/Form';
import { selectWayInputs } from '../../../redux/slices/searchWaySlice';

export default function SearchForm({ cls, children }: SearchFormProps) {
    const onSubmit: OnSubmitFormT = (e) => {
        const { elements } = e.currentTarget;
        // console.log(elements.wayTo);
    };

    // селектор для примера
    const wayInputs = useAppSelector(selectWayInputs);
    console.log(wayInputs);

    return (
        <Form
            cls={`search-form ${cls}`}
            setFormMsgHidden={setFormMsgHidden}
            onSubmitForm={onSubmit}
        >
            {children}
        </Form>
    );
}

SearchForm.defaultProps = {
    cls: '',
};
