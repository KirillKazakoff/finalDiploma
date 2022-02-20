type Validation = {
    [key: string]: string | undefined;

    valueMissing: string | undefined;
    patternMismatch?: string | undefined;
};

type InputMessages = {
    [key: string]: Validation;
};

const inputMessages: InputMessages = {
    wayFrom: {
        valueMissing: 'Введите город, откуда вы собираетесь отправиться',
        noCity: 'такого города нет в базе данных',
        patternMismatch: 'Введите без знаков препинания',
    },
    wayTo: {
        valueMissing: 'Введите город, в который вы собираетесь отправиться',
        noCity: 'такого города нет в базе данных',
        patternMismatch: 'Введите без знаков препинания',
    },
    dateTo: {
        valueMissing: 'Введите дату (туда)',
        patternMismatch: 'Введите дату в формате ДД/ММ/ГГ цифрами',
        pastDate: 'Вы пытаетесь ввести прошедшую дату',
    },
    dateFrom: {
        valueMissing: 'Введите дату (обратно)',
        patternMismatch: 'Введите дату в формате ДД/ММ/ГГ цифрами',
        pastDate: 'Вы пытаетесь ввести прошедшую дату',
    },
};

export const searchMessages = {
    sameCities: 'Введите разные города',
    dateMismatch: 'Дата начала путешествия позже даты возвращения',
    loading: 'Города еще не загрузились, подождите',
    success: 'Успех',
};

export default inputMessages;
