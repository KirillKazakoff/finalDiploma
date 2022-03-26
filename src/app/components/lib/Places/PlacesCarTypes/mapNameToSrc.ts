import { ActiveCarT } from '../../../../redux/slices/placesSlice';

export const mapNameToSrc = (carType: string) => {
    switch (carType as ActiveCarT) {
        case 'first':
            return 'star';

        case 'second':
            return 'coupe';

        case 'third':
            return 'plaz';

        case 'fourth':
            return 'person';

        default:
            return '';
    }
};

export const mapNameToRus = (carType: string) => {
    switch (carType as ActiveCarT) {
        case 'first':
            return 'Люкс';

        case 'second':
            return 'Купе';

        case 'third':
            return 'Плацкарт';

        case 'fourth':
            return 'Сидячий';

        default:
            return '';
    }
};
