import { DateTime } from 'luxon';

export default function validateDate(inputEl: HTMLInputElement) {
    const { value } = inputEl;

    const dateTime = DateTime.fromFormat(value, 'dd/LL/yy');
    const dateTimeNow = DateTime.now().startOf('day');

    let customValidity = '';

    if (!dateTime.isValid) {
        customValidity = 'patternMismatch';
    }
    if (dateTime.toMillis() < dateTimeNow.toMillis()) {
        customValidity = 'pastDate';
    }

    inputEl.setCustomValidity(customValidity);
}
