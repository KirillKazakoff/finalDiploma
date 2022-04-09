import React from 'react';
import { useAppDispatch } from '../../../../../redux/reduxHooks';
import { refreshDoctype } from '../../../../../redux/slices/passengersSlice';
import FormSelect from '../../../Common/FormSelect';
import { mapDocClass } from './mapDocClasses';
import { useSetInput } from '../../useSetInput';
import { useGetDocOptions } from './useGetDocOptions';

type Props = { id: string };

export default function PassengerDocType({ id }: Props) {
    const name = 'document_type';
    const dispatch = useAppDispatch();
    const setInput = useSetInput(id, name);

    const getOptions = useGetDocOptions(id);
    const { options, selected } = getOptions();

    const onClick = (value: string) => () => {
        setInput(value);
        dispatch(refreshDoctype(id));
    };

    const optionsList = options.map((doc) => (
        <li
            className='option option-doctype' key={doc}
            onClick={onClick(doc)}
        >
            {doc}
        </li>
    ));

    const clsWrapper = mapDocClass(selected);

    return (
        <div className={`passenger-form-col passenger-form-col-${clsWrapper}`}>
            <label className='passenger-input-label' htmlFor='docseries'>
                Тип документа
            </label>
            <FormSelect selected={selected} cls='doctype'>
                {optionsList}
            </FormSelect>
        </div>
    );
}
