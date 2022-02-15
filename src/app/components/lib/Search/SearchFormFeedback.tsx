import React, { useEffect } from 'react';
import FormFeedback from '../Common/FormFeedback';
import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks';
import { setFormMsg, setFormStatus } from '../../../redux/slices/searchFormSlice';

export default function SearchFormFeedback() {
    const dispatch = useAppDispatch();
    const { wayFrom, wayTo } = useAppSelector((state) => state.searchWay);

    useEffect(() => {
        if (wayFrom.value === wayTo.value) {
            dispatch(setFormMsg('Введите разные города'));
            dispatch(setFormStatus('error'));
        } else if (wayFrom.status === 'loading' || wayTo.status === 'loading') {
            dispatch(setFormMsg('Города еще не загрузились, подождите пожалуйста'));
            dispatch(setFormStatus('error'));
        } else if (wayFrom.error) {
            dispatch(setFormMsg(wayFrom.error));
            dispatch(setFormStatus('error'));
        } else if (wayTo.error) {
            dispatch(setFormMsg(wayTo.error));
            dispatch(setFormStatus('error'));
        } else {
            dispatch(setFormMsg('Успех'));
            dispatch(setFormStatus('success'));
        }
    }, [wayFrom, wayTo]);

    return <FormFeedback />;
}
