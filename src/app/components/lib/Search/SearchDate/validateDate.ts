import { DateTime } from 'luxon';

export default function validateCity(inputEl: HTMLInputElement) {
    const { value } = inputEl;

    const dateTime = DateTime.fromFormat(value, 'dd/LL/yy');
    const dateTimeNow = DateTime.now();

    if (!dateTime.isValid) {
        inputEl.setCustomValidity('неверный формат, введите в формате 10/10/10');
    }
    if (dateTime.toMillis() < dateTimeNow.toMillis()) {
        inputEl.setCustomValidity('вы пытаетесь ввести прошлую дату');
    } else {
        inputEl.setCustomValidity('');
    }
}
