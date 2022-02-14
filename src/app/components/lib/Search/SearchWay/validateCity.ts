import { Status } from '../../../../types';

export default function validateCity(
    inputEl: HTMLInputElement,
    stateCity: string,
    status: Status,
) {
    const { value } = inputEl;

    if (status !== 'loaded') {
        inputEl.setCustomValidity('города грузятся');
    }
    if (status === 'loaded') {
        inputEl.setCustomValidity('');
    }
    if (value && stateCity !== value) {
        inputEl.setCustomValidity('такого города нет');
    } else {
        inputEl.setCustomValidity('');
    }
}
