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

export default function SearchFormFeedback() {
    const dispatch = useAppDispatch();
    const { wayFrom, wayTo } = useAppSelector((state) => state.searchWay);
    const { sameCities, loading, success } = searchMessages;

    useEffect(() => {
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
            dispatch(setFormError({ name: 'wayFrom', isFormError: false }));
            dispatch(setFormError({ name: 'wayTo', isFormError: false }));
            msg = sameCities;
        } else {
            dispatch(setFormError({ name: 'wayFrom', isFormError: true }));
            dispatch(setFormError({ name: 'wayTo', isFormError: true }));
        }

        if (msg !== success) {
            status = 'error';
        }

        dispatch(setFormMsg(msg));
        dispatch(setFormStatus(status));
    }, [wayFrom.error, wayTo.error, wayFrom.status, wayTo.status]);

    return <FormFeedback />;
}
