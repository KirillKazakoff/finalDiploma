import { nanoid } from 'nanoid';
import { PassengersStateT } from '../../../types/typesSlices';
import { initialInput } from './reduxInputUtils';
import { FormStatusT } from '../searchFormSlice';

export const initForm = () => {
    const form = {
        fields: {
            is_adult: { ...initialInput },
            last_name: { ...initialInput },
            first_name: { ...initialInput },
            patronymic: { ...initialInput },
            gender: { ...initialInput },
            birthday: { ...initialInput },
            is_impaired: { ...initialInput },

            document_type: { ...initialInput },
        },
        isMsgHidden: true,
        statusValidity: 'idle' as FormStatusT,
    };

    form.fields.document_type.value = 'Паспорт РФ';
    form.fields.is_adult.value = 'Взрослый';

    return form;
};

export const getInitialState = () => {
    const state: PassengersStateT = {};
    const form = initForm();

    const id = nanoid();
    state[id] = form;
    return state;
};
