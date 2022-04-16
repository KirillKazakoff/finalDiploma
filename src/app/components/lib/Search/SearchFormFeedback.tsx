import React from 'react';
import { setFormMsgHidden, setFormStatus } from '../../../redux/slices/searchFormSlice';
import { searchMessages } from './messages';
import useValidateSame from './useValidateSame';
import useValidateCompare from './useValidateCompare';
import { SearchFormFeedbackT } from '../../../types/typesSearch';
import { reduceErrors } from '../../../form/reduceErrors';
import FormFeedback from '../Common/Form/FormFeedback';

export default function SearchFormFeedback(props: SearchFormFeedbackT) {
    const {
        waysState, datesState, isMsgHidden, children,
    } = props;

    const { wayFrom, wayTo } = waysState;
    const { dateFrom, dateTo } = datesState;

    const errors = reduceErrors([wayFrom, wayTo, dateFrom, dateTo]);

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
            setFormMsgHidden={setFormMsgHidden}
        >
            {children}
        </FormFeedback>
    );
}
