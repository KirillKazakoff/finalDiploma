export default function validateCity(inputEl: HTMLInputElement, stateCity: string) {
    const { value } = inputEl;

    if (value && stateCity !== value.trim()) {
        inputEl.setCustomValidity('такого города нет');
    } else {
        inputEl.setCustomValidity('');
    }
}
