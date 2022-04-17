/* eslint-disable no-param-reassign */
import { PasPlaceT } from '../../../../../redux/slices/pasPlacesSlice';
import type { AgeInfoT, PlacesAgeInfoT } from '../../../../../types/typesTripDetails';

const initAgeInfo: AgeInfoT = {
    amount: 0,
    price: 0,
};

const getInit = (): PlacesAgeInfoT => {
    return {
        adult: { ...initAgeInfo },
        microPeople: { ...initAgeInfo },
    };
};

export const getAgeCategories = (pasPlaces: PasPlaceT[]) => {
    return pasPlaces.reduce<PlacesAgeInfoT>((total, pasPlace) => {
        if (pasPlace.person_info.is_adult) {
            total.adult.amount += 1;
            total.adult.price += pasPlace.price;
        } else {
            total.microPeople.amount += 1;
            total.microPeople.price += pasPlace.price;
        }

        return total;
    }, getInit());
};

export const matchCategory = (key: string) => {
    switch (key) {
        case 'adult':
            return 'Взрослых';

        case 'microPeople':
            return 'Детей';

        default:
            return '';
    }
};
