import { DateTime } from 'luxon';
import { getAge } from './PassengerAge/getAge';

export const validateDatePerson = (inputEl: HTMLInputElement, isAdult: string) => {
    const { value } = inputEl;

    const dateTime = DateTime.fromFormat(value, 'dd/LL/yyyy');
    const dateTimeNow = DateTime.now().startOf('day');
    const age = getAge(value);

    let customValidity = '';

    if (!dateTime.isValid) {
        customValidity = 'patternMismatch';
    }
    if (dateTime.toMillis() > dateTimeNow.toMillis()) {
        customValidity = 'futureDate';
    }

    if (isAdult === 'Взрослый') {
        if (age < 10) customValidity = 'youngAge';
    }
    if (isAdult === 'Детский') {
        if (age >= 10) customValidity = 'oldAge';
    }
    if (age > 150) {
        customValidity = 'deadAge';
    }
    if (!value || !age) {
        customValidity = '';
    }

    inputEl.setCustomValidity(customValidity);
};
