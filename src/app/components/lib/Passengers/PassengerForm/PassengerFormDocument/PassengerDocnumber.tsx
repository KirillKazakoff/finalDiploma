import React, { useEffect } from 'react';
import PlaceholderUnderscores from '../../../Common/Form/PlaceholderUnderscores';
import PassengerInput from '../PassengerInput';
import { mapDocClass } from './mapDocClasses';
import { mapDocnumber } from './mapDocnumber';
import { useInitInput } from '../../useInitInput';
import { validateDocnumber } from './validateDocnumber';

type Props = { doctype: string; id: string };
export default function PassengerDocnumber({ doctype, id }: Props) {
    const name = 'document_number';
    const clsType = mapDocClass(doctype);
    const { reg, symbols } = mapDocnumber(doctype);

    const { validate, inputState, ref } = useInitInput(id, name);

    useEffect(() => {
        if (!ref.current) return;
        const input = ref.current;

        validateDocnumber(input, doctype);
        validate(input);
    });

    return (
        <div className='passenger-form-col passenger-form-col-document'>
            <label className='passenger-input-label' htmlFor='docnumber'>
                Номер
            </label>

            <PassengerInput
                required
                id={id}
                state={inputState}
                name={name}
                pattern={reg}
                placeholder={`${symbols} символов`}
                parrentRef={ref}
                className={`input input-number input-${clsType}`}
            />

            <PlaceholderUnderscores
                cls={clsType} amount={symbols}
                state={inputState}
            />
        </div>
    );
}
