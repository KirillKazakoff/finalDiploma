import { PassengerFormT } from '../../../types/models/modelPerson';

export const mapPassengerData = (form: PassengerFormT) => {
    const personData = {
        is_adult: form.is_adult,
        last_name: form.last_name,
        first_name: form.first_name,
        patronymic: form.patronymic,
        gender: form.gender,
        birthday: form.birthday,
        is_impaired: form.is_impaired,
    };

    return personData;
};
