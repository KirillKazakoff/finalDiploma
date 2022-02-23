import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks';
import {
    selectFormState,
    setFormMsgHidden,
    setFormStatus,
} from '../../../redux/slices/searchFormSlice';
import { OnSubmitFormT } from '../../../types/typesForms';
import { SearchFormProps } from '../../../types/typesSearch';
import Form from '../Common/Form';
import { selectWayInputs } from '../../../redux/slices/searchWaySlice';
import SearchFormBtn from './SearchFormBtn';
import SearchFormFeedback from './SearchFormFeedback';
import { selectDateInputs } from '../../../redux/slices/searchDateSlice';

export default function SearchForm({ cls, children }: SearchFormProps) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const waysState = useAppSelector(selectWayInputs);
    const datesState = useAppSelector(selectDateInputs);
    const { isMsgHidden, status } = useAppSelector(selectFormState);

    const onSubmit: OnSubmitFormT = (e) => {
        if (status === 'success') {
            dispatch(setFormStatus('loading'));
            navigate('/tickets');
        }
        // console.log(elements.wayTo);
    };

    // селектор для примера

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
