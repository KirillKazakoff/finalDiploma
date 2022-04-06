/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../redux/reduxHooks';
import { setInput } from '../../../../../redux/slices/passengersSlice';
import { IdProp } from '../../../../../types/typesPassengers';

export default function PassengerSex({ id }: IdProp) {
    const dispatch = useAppDispatch();
    const gender = useAppSelector((state) => state.passengers[id].fields.gender);

    const onClick = (value: string) => () => {
        const dispatchObj = {
            id,
            name: 'gender',
            value,
        };

        dispatch(setInput(dispatchObj));
    };

    const genders = ['М', 'Ж'].map((value) => {
        const cls = gender.value === value ? 'sex-field-active' : '';
        return (
            <span
                key={value} onClick={onClick(value)}
                className={`sex-field ${cls}`}
            >
                {value}
            </span>
        );
    });

    return (
        <div className='passenger-form-col passenger-form-col-sex'>
            <label className='passenger-input-label'>Пол</label>
            <div className='passenger-input-wrapper passenger-input-wrapper-sex'>
                {genders}
            </div>
        </div>
    );
}
