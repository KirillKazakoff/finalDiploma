import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { setFormError, WayStateT } from '../../../redux/slices/searchWaySlice';

type UseValidateSameT = (wayFrom: WayStateT, wayTo: WayStateT) => boolean;

const useValidateSame: UseValidateSameT = (wayFrom, wayTo) => {
    const dispatch = useAppDispatch();
    const [stateError, setStateError] = useState(false);

    const setSameError = (isFormError: boolean) => {
        dispatch(setFormError({ name: 'wayFrom', isFormError }));
        dispatch(setFormError({ name: 'wayTo', isFormError }));
        setStateError(isFormError);
    };

    useEffect(() => {
        let error = false;
        if (wayFrom.value === wayTo.value && wayFrom.value && wayTo.value) {
            error = true;
        }

        setSameError(error);
    }, [wayFrom.error, wayTo.error, wayFrom.status, wayTo.status]);

    return stateError;
};

export default useValidateSame;
