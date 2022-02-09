/* eslint-disable no-restricted-syntax */
const validateForm = (input: HTMLInputElement) => {
    const validity = input.validity as ValidityState & {
        [key: string]: boolean;
    };

    if (validity.valid) {
        return {
            isValid: true,
            error: undefined,
        };
    }

    let error;
    for (const key in validity) {
        if (validity[key]) {
            error = key;
        }
    }

    return {
        isValid: false,
        error,
    };
};

export default validateForm;
