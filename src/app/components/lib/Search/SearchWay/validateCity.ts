export default function validateCity(inputEl: HTMLInputElement, stateCity: string) {
    const { value } = inputEl;

    const isPatternValid = /^[а-я][а-я-]+[а-я]$/.test(value);

    let customValidity = '';

    if (value && stateCity !== value.trim()) {
        customValidity = 'noCity';
    }
    if (!isPatternValid) {
        customValidity = 'patternMismatch';
    }

    inputEl.setCustomValidity(customValidity);
}
