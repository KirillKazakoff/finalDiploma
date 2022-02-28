import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectFormState, setFormMsgHidden } from '../../../redux/slices/searchFormSlice';
import { OnSubmitFormT } from '../../../types/typesForms';
import { SearchFormProps } from '../../../types/typesSearch';
import Form from '../Common/Form';
import { selectWayInputs } from '../../../redux/slices/searchWaySlice';
import SearchFormBtn from './SearchFormBtn';
import SearchFormFeedback from './SearchFormFeedback';
import { selectDateInputs } from '../../../redux/slices/searchDateSlice';

export default function SearchForm({ cls, children }: SearchFormProps) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const waysState = useAppSelector(selectWayInputs);
    const datesState = useAppSelector(selectDateInputs);
    const { isMsgHidden, statusValidity } = useAppSelector(selectFormState);

    const onSubmit: OnSubmitFormT = (e) => {
        if (statusValidity === 'success' && pathname !== '/tickets') {
            navigate('/tickets');
        }
    };

    let className = 'search-form';
    if (cls) className = `${className} ${className}-${cls}`;

    return (
        <Form
            cls={className} setFormMsgHidden={setFormMsgHidden}
            onSubmitForm={onSubmit}
        >
            {children}
            <SearchFormFeedback
                waysState={waysState}
                datesState={datesState}
                isMsgHidden={isMsgHidden}
            >
                <SearchFormBtn cls={cls}>Найти билеты</SearchFormBtn>
            </SearchFormFeedback>
        </Form>
    );
}

SearchForm.defaultProps = {
    cls: '',
};
