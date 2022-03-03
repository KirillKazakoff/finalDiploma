/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks';
import { selectFormState, setFormMsgHidden } from '../../../redux/slices/searchFormSlice';
import { OnSubmitFormT } from '../../../types/typesForms';
import { SearchFormProps } from '../../../types/typesSearch';
import Form from '../Common/Form';
import { selectWayInputs } from '../../../redux/slices/searchWaySlice';
import SearchFormBtn from './SearchFormBtn';
import SearchFormFeedback from './SearchFormFeedback';
import { selectDateInputs } from '../../../redux/slices/searchDateSlice';
import { fetchRoutes } from '../../../thunk/api/fetchRoutes';
import formatDate from './SearchDate/formatDate';

export default function SearchForm({ cls, children }: SearchFormProps) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const waysState = useAppSelector(selectWayInputs);
    const datesState = useAppSelector(selectDateInputs);
    const { isMsgHidden, statusValidity } = useAppSelector(selectFormState);

    const dispatch = useAppDispatch();
    const onSubmit: OnSubmitFormT = (e) => {
        // if (statusValidity === 'success' && pathname !== '/tickets') {
        // navigate('/tickets');
        // }
        const searchSettings = {
            from_city_id: waysState.wayFrom.cities[0]._id,
            to_city_id: waysState.wayTo.cities[0]._id,
            // date_start: formatDate(datesState.dateTo.value),
            // date_end: formatDate(datesState.dateFrom.value),
            date_start: '2022-03-05',
            date_end: '2022-03-06',
        };
        dispatch(fetchRoutes(searchSettings));
    };

    let className = 'search-form';
    if (cls) className = `${className} ${className}-${cls}`;

    useEffect(() => {
        onSubmit();
    }, []);

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
