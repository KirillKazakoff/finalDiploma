import React from 'react';
import { setFormMsgHidden } from '../../../redux/slices/searchFormSlice';
import Form from '../Common/Form';

type SearchFormProps = { cls?: string; children: React.ReactNode };

export default function SearchForm({ cls, children }: SearchFormProps) {
    return (
        <Form cls={`search-form ${cls}`} setFormMsgHidden={setFormMsgHidden}>
            {children}
        </Form>
    );
}

SearchForm.defaultProps = {
    cls: '',
};
