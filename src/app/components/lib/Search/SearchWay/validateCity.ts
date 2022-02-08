export default function validateCity(inputEl: HTMLInputElement, stateCity: string) {
    const { value } = inputEl;

    console.log(stateCity);
    if (value && stateCity !== value) {
        inputEl.setCustomValidity('такого города нет');
    } else {
        inputEl.setCustomValidity('');
    }
}
