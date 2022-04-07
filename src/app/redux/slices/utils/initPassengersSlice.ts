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
            include_children_seat: { ...initialInput },

            document_type: { ...initialInput },
            document_number: { ...initialInput },
            document_series: { ...initialInput },
        },

        isMsgHidden: true,
        statusValidity: 'idle' as FormStatusT,
        isChildForm: false,
    };

    form.fields.document_type.value = 'Паспорт РФ';
    form.fields.is_adult.value = 'Взрослый';
    form.fields.gender.error = 'Укажите пол';

    return form;
};

export const getInitialState = () => {
    const state: PassengersStateT = {};
    const form = initForm();

    const id = nanoid();
    state[id] = form;
    return state;
};
