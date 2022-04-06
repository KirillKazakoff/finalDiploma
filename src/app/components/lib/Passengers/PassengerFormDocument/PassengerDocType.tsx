import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../redux/reduxHooks';
import { refreshDoctype } from '../../../../redux/slices/passengersSlice';
import FormSelect from '../../Common/FormSelect';
import { mapDocClass } from './mapDocClasses';
import { useSetInput } from '../useSetInput';

type Props = { id: string };

export default function PassengerDocType({ id }: Props) {
    const dispatch = useAppDispatch();
    const name = 'document_type';
    const docType = useAppSelector((state) => state.passengers[id].fields.document_type);

    const setInput = useSetInput(id, name);
    const onClick = (value: string) => () => {
        setInput(value);
        dispatch(refreshDoctype(id));
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
