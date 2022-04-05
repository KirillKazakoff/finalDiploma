/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../redux/reduxHooks';
import { setInput } from '../../../../redux/slices/passengersSlice';
import FormSelect from '../../Common/FormSelect';
import { mapDocClass } from './mapDocClasses';

type Props = { id: string };

export default function PassengerDocType({ id }: Props) {
    const dispatch = useAppDispatch();
    const docType = useAppSelector((state) => state.passengers[id].fields.document_type);

    const onClick = (value: string) => () => {
        const dispatchObj = {
            id,
            name: 'document_type',
            value,
        };

        dispatch(setInput(dispatchObj));
    };

    const options = ['Паспорт РФ', 'Свидетельство о рождении'].map((doc) => (
        <li
            className='option option-doctype' key={doc}
            onClick={onClick(doc)}
        >
            {doc}
        </li>
    ));

    const clsWrapper = mapDocClass(docType.value);

    return (
        <div className={`passenger-form-col passenger-form-col-${clsWrapper}`}>
            <label className='passenger-input-label' htmlFor='docseries'>
                Тип документа
            </label>
            <FormSelect selected={docType.value} cls='doctype'>
                {options}
            </FormSelect>
        </div>
    );
}
