export const matchPayMethod = (method: string) => {
    switch (method) {
        case 'online':
            return 'Онлайн';

        case 'cash':
            return 'Наличными';

        default:
            return '';
    }
};
