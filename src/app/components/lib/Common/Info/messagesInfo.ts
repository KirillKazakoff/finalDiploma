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
};
