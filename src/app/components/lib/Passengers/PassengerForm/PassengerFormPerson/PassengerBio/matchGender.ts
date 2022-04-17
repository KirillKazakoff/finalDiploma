export const matchGender = (gender: boolean) => {
    switch (gender) {
        case true:
            return 'мужской';

        case false:
            return 'женский';

        default:
            return '';
    }
};
