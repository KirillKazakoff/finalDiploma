import { DateTime } from 'luxon';
import { useAppDispatch } from '../../../../redux/reduxHooks';
import { setActiveDate } from '../../../../redux/slices/searchDateSlice';

export const validateDate = (inputEl: HTMLInputElement) => {
    const { value, required } = inputEl;

    const dateTime = DateTime.fromFormat(value, 'dd/LL/yy');
    const dateTimeNow = DateTime.now().startOf('day');

    let customValidity = '';

    if (!dateTime.isValid) {
        customValidity = 'patternMismatch';
    }
    if (dateTime.toMillis() < dateTimeNow.toMillis()) {
        customValidity = 'pastDate';
    }
    if (!required && !value) {
        customValidity = '';
    }

    inputEl.setCustomValidity(customValidity);
};

export default function useValidateDate() {
    const dispatch = useAppDispatch();

    const validateDateFn = (inputEl: HTMLInputElement) => {
        const { value, name } = inputEl;
        if (!value) {
            dispatch(setActiveDate({ name, date: null }));
        }

        validateDate(inputEl);
    };

    return validateDateFn;
}
