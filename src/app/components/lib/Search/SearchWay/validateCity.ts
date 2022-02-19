import { FetchStatusT } from '../../../../types/typesPayload';

type ValidateCity = (
    inputEl: HTMLInputElement,
    stateCity: string,
    status: FetchStatusT
) => void;

const validateCity = (inputEl: HTMLInputElement, stateCity: string) => {
    const { value, validity } = inputEl;

    // const isPatternValid = /[а-я]*[-]?[а-я]*[а-я]$/.test(value);

    let customValidity = '';

    if (value && stateCity !== value.trim() && validity.valid) {
        customValidity = 'noCity';
    }
    // if (!isPatternValid) {
    //     customValidity = '';
    // }

    inputEl.setCustomValidity(customValidity);
};

export default validateCity;
