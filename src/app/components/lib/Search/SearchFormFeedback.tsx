import React from 'react';
import FormFeedback from '../Common/FormFeedback';
import { useAppSelector } from '../../../redux/reduxHooks';
import { searchMessages } from './messages';
import useValidateSame from './useValidateSame';
import useValidateCompare from './useValidateCompare';
import { FormFeedbackT } from '../../../types/typesForms';

export default function SearchFormFeedback({ children }: FormFeedbackT) {
    const { wayFrom, wayTo } = useAppSelector((state) => state.searchWay);
    const { dateFrom, dateTo } = useAppSelector((state) => state.searchDate);
    const errors = [wayFrom, wayTo, dateFrom, dateTo].map((state) => state.error);

    const {
        sameCities, loading, success, dateMismatch,
    } = searchMessages;

    const isSameError = useValidateSame(wayFrom, wayTo);
    const isDateCompareError = useValidateCompare(dateTo, dateFrom);

    let msg = success;

    if (wayFrom.status === 'loading' || wayTo.status === 'loading') {
        msg = loading;
    }
    if (isSameError) {
        msg = sameCities;
    }
    if (isDateCompareError) {
        msg = dateMismatch;
    }

    return (
        <FormFeedback msg={msg} errors={errors}>
            {children}
        </FormFeedback>
    );
}
