import { nanoid } from 'nanoid';
import { PassengersStateT } from '../../../types/typesSlices';
import { FormStatusT } from './reduxFormUtils';
import { initialInput } from './reduxInputUtils';

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

    // form.fields.document_type.value = 'Паспорт РФ';
    // form.fields.is_adult.value = 'Взрослый';
    // form.fields.gender.error = 'Укажите пол';

    form.fields.is_adult.value = 'true';
    form.fields.last_name.value = 'Гусь';
    form.fields.first_name.value = 'Гузло';
    form.fields.patronymic.value = 'Мемрович';
    form.fields.gender.value = 'М';
    form.fields.birthday.value = '12/12/1999';
    form.fields.document_type.value = 'Паспорт РФ';
    form.fields.is_adult.value = 'Взрослый';
    form.fields.document_series.value = '1234';
    form.fields.document_number.value = '123456';

    return form;
};

export const getInitialState = () => {
    const state: PassengersStateT = {};
    const form = initForm();

    const id = nanoid();
    state[id] = form;
    return state;
};
