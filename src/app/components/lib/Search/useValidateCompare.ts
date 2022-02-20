import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { DateStateT, setFormError } from '../../../redux/slices/searchDateSlice';

type UseValidateCompareT = (dateTo: DateStateT, dateFrom: DateStateT) => boolean;

const useValidateCompare: UseValidateCompareT = (dateTo, dateFrom) => {
    const dispatch = useAppDispatch();
    const [stateError, setStateError] = useState(false);

    const setCompareError = (isFormError: boolean) => {
        dispatch(setFormError({ name: 'dateTo', isFormError }));
        dispatch(setFormError({ name: 'dateFrom', isFormError }));
        setStateError(isFormError);
    };

    useEffect(() => {
        const dateTimeTo = DateTime.fromFormat(dateTo.value, 'dd/LL/yy');
        const dateTimeFrom = DateTime.fromFormat(dateFrom.value, 'dd/LL/yy');

        let error = false;
        if (dateTimeTo.toMillis() > dateTimeFrom.toMillis()) {
            error = true;
        }

        setCompareError(error);
    }, [dateFrom.error, dateTo.error]);

    return stateError;
};

export default useValidateCompare;
