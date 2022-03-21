/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks';
import { selectFormState, setFormMsgHidden } from '../../../redux/slices/searchFormSlice';
import { SearchFormProps } from '../../../types/typesSearch';
import Form from '../Common/Form';
import { selectWayInputs } from '../../../redux/slices/searchWaySlice';
import SearchFormBtn from './SearchFormBtn';
import SearchFormFeedback from './SearchFormFeedback';
import { selectDateInputs } from '../../../redux/slices/searchDateSlice';
import { fetchRoutes } from '../../../fetch/api/fetchRoutes';
import formatDate from './SearchDate/formatDate';
import { selectSearchFilter } from '../../../redux/slices/searchFilterSlice';
import { fetchRoutesFirst } from '../../../fetch/api/fetchRoutesFirst';

export default function SearchForm({ cls, children }: SearchFormProps) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const waysState = useAppSelector(selectWayInputs);
    const datesState = useAppSelector(selectDateInputs);
    const { top } = useAppSelector(selectSearchFilter);

    const { isMsgHidden, statusValidity } = useAppSelector(selectFormState);

    const searchSettings = {
        from_city_id: waysState.wayFrom.cities[0]._id,
        to_city_id: waysState.wayTo.cities[0]._id,
        offset: top.offset,
        sort: top.sort,
        limit: top.limit,
    };
    const onFilterChange = () => {
        dispatch(fetchRoutes(searchSettings));
    };

    const onSubmit = () => {
        if (statusValidity === 'success' && pathname !== '/tickets') {
            navigate('/tickets');
        }

        dispatch(fetchRoutesFirst(searchSettings));
    };

    let className = 'search-form';
    if (cls) className = `${className} ${className}-${cls}`;

    useEffect(() => {
        onFilterChange();
    }, [top]);

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
