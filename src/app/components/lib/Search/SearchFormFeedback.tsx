import React, { useEffect } from 'react';
import FormFeedback from '../Common/FormFeedback';
import { useAppSelector } from '../../../redux/reduxHooks';
import { searchMessages } from './messages';
import { setFormError } from '../../../redux/slices/searchWaySlice';
import useSameCity from './useSameCity';

export default function SearchFormFeedback() {
    const { wayFrom, wayTo } = useAppSelector((state) => state.searchWay);
    const { dateFrom, dateTo } = useAppSelector((state) => state.searchDate);
    const errors = [wayFrom, wayTo, dateFrom, dateTo].map((state) => state.error);

    const { sameCities, loading, success } = searchMessages;

    const setSameError = useSameCity(setFormError);
    useEffect(() => {
        if (wayFrom.value === wayTo.value && wayFrom.value && wayTo.value) {
            setSameError(true);
        } else {
            setSameError(false);
        }
    }, [errors, wayFrom.status, wayTo.status]);

    let msg = success;

    if (wayFrom.status === 'loading' || wayTo.status === 'loading') {
        msg = loading;
    }
    if (wayFrom.value === wayTo.value) {
        msg = sameCities;
    }

    return <FormFeedback msg={msg} errors={errors} />;
}
