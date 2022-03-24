type Validation = {
    [key: string]: string;

    valueMissing: string;
    patternMismatch?: string;
    typeMismatch?: string;
};

type InputMessages = {
    [key: string]: Validation;
};

const wayState = {
    noCity: 'такого города нет в базе данных',
    patternMismatch: 'Введите без знаков препинания, кириллицей',
};

const dateState = {
    patternMismatch: 'Введите дату в формате ДД/ММ/ГГ цифрами',
    pastDate: 'Вы пытаетесь ввести прошедшую дату',
};

const inputMessages: InputMessages = {
    wayFrom: {
        valueMissing: 'Введите город, откуда вы собираетесь отправиться',
        ...wayState,
    },
    wayTo: {
        valueMissing: 'Введите город, куда вы собираетесь отправиться',
        ...wayState,
    },
    dateTo: {
        valueMissing: 'Введите дату (туда)',
        ...dateState,
    },
    dateFrom: {
        valueMissing: 'Введите дату (обратно)',
        ...dateState,
    },
    subscribe: {
        valueMissing: 'Введите почту',
        typeMismatch: 'Введите правильно свою почту',
    },
};

export const searchMessages = {
    noDateTo: 'Сначала введите дату начала путешествия',
    sameCities: 'Введите разные города',
    dateMismatch: 'Дата начала путешествия позже даты возвращения',
    loading: 'Города еще не загрузились, подождите',

    success: 'Успех',
};

export default inputMessages;
