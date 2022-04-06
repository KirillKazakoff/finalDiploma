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
    last_name: {
        valueMissing: 'Введите фамилию',
        patternMismatch: 'Введите без знаков препинания, кириллицей',
    },
    first_name: {
        valueMissing: 'Введите имя',
        patternMismatch: 'Введите без знаков препинания, кириллицей',
    },
    patronymic: {
        valueMissing: 'Введите отчество',
        patternMismatch: 'Введите без знаков препинания, кириллицей',
    },
    birthday: {
        valueMissing: 'Введите дату',
        patternMismatch: 'Введите дату в формате ДД/ММ/ГГ цифрами',
        futureDate: 'Вы пытаетесь ввести будущую дату',
    },
    document_number: {
        valueMissing: 'Введите номер документа',
        patternMismatch: 'hello',
        pasport_number: 'Введите 6 цифр',
        birth_certificate_number:
            'Поле должно содержать римские цифры (в латинском регистре буквами I, V, X), 2 заглавные буквы русской раскладкой клавиатуры, номер 6 цифр. Пример: ХМЮ 123456. При заполнении номера документа, удостоверяющего личность, символ «№» не указывается.  ',
    },
    document_series: {
        valueMissing: 'Введите серию документа',
        patternMismatch: 'hello',
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
