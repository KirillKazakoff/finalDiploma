/* eslint-disable no-param-reassign */
import { SeatsTypesT } from '../../../../types/models/modelSeats';

export const getCarriageName = (typeKey: string) => {
    switch (typeKey) {
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

export const getSeatName = (seatKey: string) => {
    switch (seatKey) {
        case 'bottom':
            return 'нижние';
        case 'top':
            return 'верхние';
        case 'side':
            return 'боковые';
        default:
            return '';
    }
};

export const getAllAvailable = (available: SeatsTypesT) => {
    const allAvailable = Object.values(available).reduce<number>((total, value) => {
        total += value;
        return total;
    }, 0);

    return allAvailable;
};
