import React from 'react';
import FormFeedback from '../Common/FormFeedback';
import { setFormStatus } from '../../../redux/slices/searchFormSlice';
import { searchMessages } from './messages';
import useValidateSame from './useValidateSame';
import useValidateCompare from './useValidateCompare';
import { SearchFormFeedbackT } from '../../../types/typesSearch';

export default function SearchFormFeedback(props: SearchFormFeedbackT) {
    const {
        waysState, datesState, isMsgHidden, children,
    } = props;

    const { wayFrom, wayTo } = waysState;
    const { dateFrom, dateTo } = datesState;

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
