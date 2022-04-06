import { DateTime } from 'luxon';

export const validateDatePerson = (inputEl: HTMLInputElement) => {
    const { value } = inputEl;

    const dateTime = DateTime.fromFormat(value, 'dd/LL/yy');
    const dateTimeNow = DateTime.now().startOf('day');

    let customValidity = '';

    if (!dateTime.isValid) {
        customValidity = 'patternMismatch';
    }
    if (dateTime.toMillis() > dateTimeNow.toMillis()) {
        customValidity = 'futureDate';
    }
    if (!value) {
        customValidity = '';
    }

    inputEl.setCustomValidity(customValidity);
};
