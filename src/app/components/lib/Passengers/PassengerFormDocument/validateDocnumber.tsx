export const validateDocnumber = (inputEl: HTMLInputElement, doctype: string) => {
    let customValidity = '';

    if (!inputEl.validity.patternMismatch) {
        inputEl.setCustomValidity('');
        return;
    }

    if (doctype === 'Паспорт РФ') {
        customValidity = 'pasport_number';
    }

    if (doctype === 'Свидетельство о рождении') {
        customValidity = 'birth_certificate_number';
    }
    inputEl.setCustomValidity(customValidity);
};
