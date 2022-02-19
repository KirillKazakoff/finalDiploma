import React, { useEffect } from 'react';
import FormFeedback from '../Common/FormFeedback';
import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks';
import { searchMessages } from './messages';
import {
    FormStatusT,
    setFormMsg,
    setFormStatus,
} from '../../../redux/slices/searchFormSlice';
import { setFormError } from '../../../redux/slices/searchWaySlice';
import useSameCity from './useSameCity';

export default function SearchFormFeedback() {
    const dispatch = useAppDispatch();
    const { wayFrom, wayTo } = useAppSelector((state) => state.searchWay);
    const { dateFrom, dateTo } = useAppSelector((state) => state.searchDate);

    const {
        sameCities, loading, success, emptyForm,
    } = searchMessages;
    const setSameError = useSameCity(setFormError);

    useEffect(() => {
        console.log(dateFrom.isFormError);
        console.log(dateTo.isFormError);
        console.log(dateFrom.error);
        console.log(dateTo.error);
        let msg = success;
        let status: FormStatusT = 'success';

        if (wayFrom.error) {
            msg = wayFrom.error;
        }
        if (wayTo.error) {
            msg = wayTo.error;
        }
        if (wayFrom.status === 'loading' || wayTo.status === 'loading') {
            msg = loading;
        }
        if (wayFrom.value === wayTo.value) {
            setSameError(true);
            msg = sameCities;
        } else {
            setSameError(false);
        }

        if (!wayFrom.value && !wayTo.value) {
            msg = emptyForm;
        }

        if (msg !== success) {
            status = 'error';
        }

        dispatch(setFormMsg(msg));
        dispatch(setFormStatus(status));
    }, [wayFrom.error, wayTo.error, wayFrom.status, wayTo.status]);

    return <FormFeedback />;
}
