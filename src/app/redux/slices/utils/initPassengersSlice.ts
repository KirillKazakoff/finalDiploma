import { nanoid } from 'nanoid';
import { PassengersStateT } from '../../../types/typesSlices';
import { initialInput } from './reduxInputUtils';

export const initForm = () => {
    const form = {
        is_adult: { ...initialInput },
        last_name: { ...initialInput },
        first_name: { ...initialInput },
        patronymic: { ...initialInput },
        gender: { ...initialInput },
        birthday: { ...initialInput },
        is_impaired: { ...initialInput },

        document_type: { ...initialInput },
    };

    form.document_type.value = 'Паспорт РФ';
    form.is_adult.value = 'Взрослый';

    return form;
};

export const getInitialState = () => {
    const state: PassengersStateT = {};
    const form = initForm();

    const id = nanoid();
    state[id] = form;
    return state;
};
