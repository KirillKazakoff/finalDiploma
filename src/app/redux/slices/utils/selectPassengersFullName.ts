import { createSelector } from '@reduxjs/toolkit';
import { PersonT } from '../../../types/models/modelPerson';
import { RootState } from '../../store';

type PassengerInfoT = PersonT;

const getDocData = (fields: any) => {
    const docNumber = fields.document_number.value;
    const docSeries = fields.document_series.value;

    const docData = docSeries ? `${docSeries} ${docNumber}` : docNumber;
    return docData as string;
};

export const selectPassengersInfo = createSelector(
    [(state: RootState) => state.passengers],
    (passengersRes) => {
        const passengers = Object.values(passengersRes).map((value) => {
            const { fields, isChildForm } = value;

            const passengerInfo: PassengerInfoT = {
                include_children_seat: isChildForm,
                is_impaired: fields.is_impaired.value === 'true',

                is_adult: fields.is_impaired.value === 'true',
                gender: fields.gender.value === 'М',
                birthday: fields.birthday.value,
                document_type: fields.document_type.value,
                document_data: getDocData(fields),

                first_name: fields.first_name.value,
                last_name: fields.last_name.value,
                patronymic: fields.patronymic.value,
            };

            return passengerInfo;
        });

        return passengers;
    },
);
