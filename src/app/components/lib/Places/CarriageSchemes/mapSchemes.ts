import CarriageSecond from './CarriageSecond';
import CarriageFirst from './CarriageFirst';
import CarriageFourth from './CarriageFourth';
import CarriageThird from './CarriageThird';

export const mapSchemes = (type: string) => {
    switch (type) {
        case 'first':
            return CarriageFirst;
        case 'second':
            return CarriageSecond;
        case 'third':
            return CarriageThird;
        case 'fourth':
            return CarriageFourth;
        default:
            return null;
    }
};
