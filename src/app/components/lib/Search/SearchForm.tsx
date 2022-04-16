import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks';
import { selectFormState, setFormMsgHidden } from '../../../redux/slices/searchFormSlice';
import { SearchFormProps } from '../../../types/typesSearch';
import Form from '../Common/Form/Form';
import { selectWayInputs } from '../../../redux/slices/searchWaySlice';
import SearchFormBtn from './SearchFormBtn';
import SearchFormFeedback from './SearchFormFeedback';
import { selectDateInputs } from '../../../redux/slices/searchDateSlice';
import { fetchRoutes } from '../../../fetch/api/fetchRoutes';
import { selectSearchFilter } from '../../../redux/slices/searchFilterSlice';
import { fetchRoutesFirst } from '../../../fetch/api/fetchRoutesFirst';
import getSearchSettings from './getSearchSettings';
import useCheckStatus from '../../../form/useCheckStatus';

export default function SearchForm({ cls, children }: SearchFormProps) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const waysState = useAppSelector(selectWayInputs);
    const datesState = useAppSelector(selectDateInputs);
    const { top } = useAppSelector(selectSearchFilter);

    const { isMsgHidden, statusValidity } = useAppSelector(selectFormState);

    const settings = getSearchSettings(top, waysState, datesState);
    const onFilterChange = () => {
        if (!settings) return;
        dispatch(fetchRoutes(settings));
    };

    const checkStatus = useCheckStatus(setFormMsgHidden, statusValidity);
    const onSubmit = () => {
        if (!checkStatus()) return;
        if (pathname !== '/tickets') {
            navigate('/tickets');
        }

        dispatch(fetchRoutesFirst(settings));
    };

    let className = 'search-form';
    if (cls) className = `${className} ${className}-${cls}`;

    useEffect(() => {
        onFilterChange();
    }, [top]);

    return (
        <Form cls={className} onSubmitForm={onSubmit}>
            {children}
            <SearchFormFeedback
                waysState={waysState}
                datesState={datesState}
                isMsgHidden={isMsgHidden}>
                <SearchFormBtn cls={cls}>Найти билеты</SearchFormBtn>
            </SearchFormFeedback>
        </Form>
    );
}

SearchForm.defaultProps = {
    cls: '',
};
