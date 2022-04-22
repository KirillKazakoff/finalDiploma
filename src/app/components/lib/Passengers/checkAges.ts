/* eslint-disable no-param-reassign */
import { CarContentT, PassengersStateT } from '../../../types/typesSlices';

export type AgesT = {
    [key: string]: number;
    adults: number;
    microPeople: number;
};

export const initAges: AgesT = {
    adults: 0,
    microPeople: 0,
};

export const getAges = (forms: PassengersStateT) => {
    const agesTotal = Object.values(forms).reduce<AgesT>(
        (total, form) => {
            const ageString = form.fields.is_adult.value;
            if (ageString === 'Взрослый') total.adults += 1;
            else {
                if (form.isChildForm) return total;
                total.microPeople += 1;
            }
            return total;
        },
        { ...initAges },
    );

    const { microPeople, adults } = agesTotal;
    return { microPeople, adults };
};
