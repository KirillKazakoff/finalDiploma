type Validation = {
    [key: string]: string | undefined;

    valueMissing: string | undefined;
    patternMismatch?: string | undefined;
};

type ErrorMessages = {
    [key: string]: Validation;
};

const errorMessages: ErrorMessages = {
    wayTo: {
        valueMissing: 'Введите город, откуда вы собираетесь отправиться',
        customError: 'Такого города нет в базе данных',
    },
    wayFrom: {
        valueMissing: 'Введите город, в который вы собираетесь отправиться',
        customError: 'Такого города нет в базе данных',
    },
};

export default errorMessages;
