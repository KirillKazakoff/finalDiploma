import { createSelector } from '@reduxjs/toolkit';
import { UserT } from '../../../types/models/modelPerson';
import { selectFields } from '../paymentFieldsSlice';

const getTrimedPhone = (phone: string) => {
    const trimmed = phone.replace(/\s/g, '');
    return trimmed;
};

export const selectUserInfo = createSelector([selectFields], (user) => {
    const userInfo: UserT = {
        first_name: user.first_name.value,
        last_name: user.last_name.value,
        patronymic: user.patronymic.value,

        phone: getTrimedPhone(user.phone.value),
        email: user.email.value,
        payment_method: user.payment_method.value,
    };

    return userInfo;
});
