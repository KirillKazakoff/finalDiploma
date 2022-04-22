import type { EmptyPlaceT } from '../../PasPlaces/PasPlacesForm';

/* eslint-disable max-len */
export type InfoMsgT = {
    title: string;
    desc: string;
};

export const messagesInfo = {
    placesLimit: (biggest: number) => ({
        title: `Достигнут лимит выбранных мест: ${biggest}`,
        desc: 'Если вы хотите добавить пассажира, то сначала добавьте места в поезде (направлениях)',
    }),
    placesAdd: {
        title: 'Вы перешли в секцию выбора мест',
        desc: 'Добавьте новые места или отмените уже выбранные',
    },
};

export const messagesError = {
    emptyPlaces: (route: string) => ({
        title: 'Вы ... не заполнили места !',
        desc: `Направление: ${route}`,
    }),

    childrenOverwhelm: {
        title: 'У вас слишком много детей, либо вообще нет взрослых',
        desc: 'Больше 3 детей с собой перевозить нельзя. Удалите ребенка, либо добавьте ещё взрослого человека.',
    },
    noPassengers: {
        title: 'Вы не добавили пассажиров',
        desc: 'Добавьте пассажиров, иначе вы не поедете на поезде',
    },
    fullfillForm: {
        title: 'Вы не заполнили форму',
        desc: 'Заполненные правильно формы подсвечиваются. Проверить форму можно, нажав на кнопку "Следующий пассажир"',
    },
    notEqualPlaces: (biggest: number) => ({
        title: `Количество пассажиров не равно ${biggest}`,
        desc: `Количество пассажиров не равно ${biggest} (направление с большим количеством выбранных мест)`,
    }),
    emptyPrevRoute: {
        title: 'Вы не заполнили прошлую секцию',
        desc: 'Возможно вы возвращались назад в секцию с билетами и не выбрали места. Вернитесь и выберите места (нажмите "Изменить количество мест")',
    },

    emptyPasPlace: (pasPlace: EmptyPlaceT) => ({
        title: 'Вы ... не заполнили форму!',
        desc: `Конкретная форма: Пассажир ${pasPlace.index} \n Направление: ${pasPlace.route}`,
    }),

    checkRoute: (desc: string) => ({
        title: 'Вы ... не заполнили места!',
        desc: `${desc} (Кнопка перехода подсвечена слева)`,
    }),
};

export const messagesAlert = {
    passengerRemove: {
        title: 'Вы собираетесь удалить введенного пассажира',
        desc: 'Точно удалить надо?',
    },
};
