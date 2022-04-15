import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { setFormError } from '../../../redux/slices/searchWaySlice';
import { WayStateT } from '../../../types/typesSlices';
import { searchMessages } from './messages';

type UseValidateSameT = (wayFrom: WayStateT, wayTo: WayStateT) => string;

const useValidateSame: UseValidateSameT = (wayFrom, wayTo) => {
    const dispatch = useAppDispatch();
    const [stateError, setStateError] = useState('');

    const setSameError = (formError: string) => {
        dispatch(setFormError({ name: 'wayFrom', formError }));
        dispatch(setFormError({ name: 'wayTo', formError }));
        setStateError(formError);
    };

    useEffect(() => {
        let formError = '';
        if (wayFrom.value === wayTo.value && wayFrom.value && wayTo.value) {
            formError = searchMessages.sameCities;
        }

        setSameError(formError);
    }, [wayFrom.error, wayTo.error, wayFrom.status, wayTo.status]);

    return stateError;
};

export default useValidateSame;
