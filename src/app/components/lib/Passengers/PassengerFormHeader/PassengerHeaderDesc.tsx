import React from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectIsChildForm, selectField } from '../../../../redux/slices/passengersSlice';
import { FormStatusT } from '../../../../redux/slices/utils/reduxFormUtils';

type Props = { index: number; id: string; formStatus: FormStatusT };

export default function PassengerHeaderDesc({ index, id, formStatus }: Props) {
    const isChildForm = useAppSelector(selectIsChildForm(id));
    const lastname = useAppSelector(selectField(id, 'last_name'));
    const firstname = useAppSelector(selectField(id, 'first_name'));
    const patronymic = useAppSelector(selectField(id, 'patronymic'));

    const fullname = formStatus === 'success'
        ? `${lastname.value} ${firstname.value} ${patronymic.value}`
        : '';
    const passengerDesc = fullname || `Пассажир ${index + 1}`;
    const childFormDesc = isChildForm ? '(Ребенок без занятия кресла)' : '';

    return <span className='passenger-desc'>{`${passengerDesc} ${childFormDesc}`}</span>;
}
