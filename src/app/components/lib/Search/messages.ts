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

const mail = {
    valueMissing: 'Введите почту',
    typeMismatch: 'Введите правильно свою почту',
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

    // subscribe
    subscribe: { ...mail },
    // passengers
    last_name: {
        valueMissing: 'Введите фамилию',
        patternMismatch: 'Введите кириллицей',
    },
    first_name: {
        valueMissing: 'Введите имя',
        patternMismatch: 'Введите кириллицей',
    },
    patronymic: {
        valueMissing: 'Введите отчество',
        patternMismatch: 'Введите кириллицей',
    },
    birthday: {
        valueMissing: 'Введите дату',
        patternMismatch: 'Введите дату в формате ДД.ММ.ГГГГ цифрами',
        futureDate: 'Вы пытаетесь ввести будущую дату',
        youngAge: 'Вы указали взрослый билет (от 10 лет)',
        oldAge: 'Вы указали детский билет (до 10 лет)',
        deadAge: 'Скорее всего вы уже мертвы',
        noSeatChildOld: 'У вас пожилой ребенок (до 5 лет)',
    },
    document_number: {
        valueMissing: 'Введите номер документа',
        patternMismatch: 'hello',
        pasport_number: 'Введите 6 цифр',
        birth_certificate_number:
            'Поле должно содержать римские цифры (в латинском регистре буквами I, V, X), 2 заглавные буквы русской раскладкой клавиатуры, номер 6 цифр. Пример: VГД 123456. При заполнении номера документа, удостоверяющего личность, символ «№» не указывается.  ',
    },
    document_series: {
        valueMissing: 'Введите серию документа',
        patternMismatch: 'Поле должно содержать 4 цифры',
    },

    // payment
    phone: {
        valueMissing: 'Введите номер телефона',
        patternMismatch: 'Введите номер в соответствии с патерном',
    },
    email: { ...mail },
};

export const searchMessages = {
    noDateTo: 'Сначала введите дату начала путешествия',
    sameCities: 'Введите разные города',
    dateMismatch: 'Дата начала путешествия позже даты возвращения',
    loading: 'Города еще не загрузились, подождите',

    success: 'Успех',
};

export default inputMessages;
