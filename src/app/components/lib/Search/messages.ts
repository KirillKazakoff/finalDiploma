type Validation = {
    [key: string]: string | undefined;

    valueMissing: string | undefined;
    patternMismatch?: string | undefined;
};

type InputMessages = {
    [key: string]: Validation;
};

const inputMessages: InputMessages = {
    wayTo: {
        valueMissing: 'Введите город, откуда вы собираетесь отправиться',
        noCity: 'такого города нет в базе данных',
        patternMismatch: 'Введите без знаков препинания',
    },
    wayFrom: {
        valueMissing: 'Введите город, в который вы собираетесь отправиться',
        noCity: 'такого города нет в базе данных',
        patternMismatch: 'Введите без знаков препинания',
    },
};

export const searchMessages = {
    sameCities: 'Введите разные города',
    loading: 'Города еще не загрузились, подождите',
    success: 'Успех',
};

export default inputMessages;
