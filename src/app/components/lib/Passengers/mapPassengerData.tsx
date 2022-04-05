import { PassengerFormT } from '../../../types/models/modelPerson';

export const mapPassengerData = (form: PassengerFormT) => {
    const personData = {
        is_adult: form.fields.is_adult,
        last_name: form.fields.last_name,
        first_name: form.fields.first_name,
        patronymic: form.fields.patronymic,
        gender: form.fields.gender,
        birthday: form.fields.birthday,
        is_impaired: form.fields.is_impaired,
    };

    return personData;
};
