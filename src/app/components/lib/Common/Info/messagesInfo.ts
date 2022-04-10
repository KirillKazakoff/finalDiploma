export type InfoMsgT = {
    title: string;
    desc: string;
};

export const messagesInfo = {
    placesLimit: {
        title: 'Достигнут лимит выбранных мест',
        desc: 'Если вы хотите добавить пассажира, то сначала добавьте места в поезде',
    },
    placesAdd: {
        title: 'Вы перешли в секцию выбора мест',
        desc: 'Добавьте новые места или отмените уже выбранные',
    },
    childrenOverwhelm: {
        title: 'У вас слишком много детей',
        desc: 'Больше 3 детей с собой перевозить нельзя. Удалите ребенка, либо добавьте ещё взрослого человека.',
    },
    tooManyPlaces: {
        title: 'Слишком много пассажиров',
        desc: 'Удалите лишних пассажиров, либо добавьте места. Необходимо чтобы количество пассажиров не превышало количество выбранных мест',
    },
    noPassengers: {
        title: 'Вы не добавили пассажиров',
        desc: 'Добавьте пассажиров, иначе вы не поедете на поезде',
    },
    fullfillForm: {
        title: 'Вы не заполнили форму',
        desc: 'Заполненные правильно формы подсвечиваются. Проверить форму можно, нажав на кнопку "Следующий пассажир"',
    },
};

export const messagesAlert = {
    passengerRemove: {
        title: 'Вы собираетесь удалить введенного пассажира',
        desc: 'Точно удалить надо?',
    },
};
