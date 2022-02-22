import React from 'react';
import FormFeedback from '../Common/FormFeedback';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectFormState, setFormStatus } from '../../../redux/slices/searchFormSlice';
import { searchMessages } from './messages';
import useValidateSame from './useValidateSame';
import useValidateCompare from './useValidateCompare';
import { FormFeedbackT } from '../../../types/typesForms';

export default function SearchFormFeedback({ children }: FormFeedbackT) {
    const { isMsgHidden } = useAppSelector(selectFormState);
    const { wayFrom, wayTo } = useAppSelector((state) => state.searchWay);
    const { dateFrom, dateTo } = useAppSelector((state) => state.searchDate);

    const errors = [wayFrom, wayTo, dateFrom, dateTo].reduce<string[]>((total, state) => {
        total.push(state.error);
        total.push(state.formError);
        return total;
    }, []);

    useValidateSame(wayFrom, wayTo);
    useValidateCompare(dateTo, dateFrom);

    const { loading, success } = searchMessages;
    let msg = success;

    if (wayFrom.status === 'loading' || wayTo.status === 'loading') {
        msg = loading;
    }

    return (
        <FormFeedback
            msg={msg}
            errors={errors}
            isMsgHidden={isMsgHidden}
            setFormStatus={setFormStatus}
        >
            {children}
        </FormFeedback>
    );
}
