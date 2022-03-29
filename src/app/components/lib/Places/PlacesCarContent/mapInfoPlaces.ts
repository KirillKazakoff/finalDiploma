import { CarInfoT } from '../../../../types/models/modelSeats';

export const mapInfoPlaces = (car: CarInfoT) => {
    const { coach, seatsInfo } = car;
    const {
        top, bottom, nochoice, side,
    } = seatsInfo.available;
    const {
        price, top_price, bottom_price, side_price,
    } = coach;

    const infoPlaces = [];

    switch (coach.class_type) {
        case 'first':
            infoPlaces.push({
                cost: price,
                amount: nochoice,
                desc: 'люкс',
            });
            break;

        case 'second':
            infoPlaces.push({
                cost: top_price,
                amount: top,
                desc: 'верхние',
            });
            infoPlaces.push({
                cost: bottom_price,
                amount: bottom,
                desc: 'нижние',
            });
            break;

        case 'third':
            infoPlaces.push({
                cost: top_price,
                amount: top,
                desc: 'верхние',
            });
            infoPlaces.push({
                cost: bottom_price,
                amount: bottom,
                desc: 'нижние',
            });
            infoPlaces.push({
                cost: side_price,
                amount: side,
                desc: 'боковые',
            });
            break;

        case 'fourth':
            infoPlaces.push({
                cost: bottom_price,
                amount: nochoice,
                desc: 'сидячие',
            });
            break;

        default:
            break;
    }

    return infoPlaces;
};
