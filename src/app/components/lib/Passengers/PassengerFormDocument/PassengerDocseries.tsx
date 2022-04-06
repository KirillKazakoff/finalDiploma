import React, { useEffect } from 'react';
import PlaceholderUnderscores from '../../Common/PlaceholderUnderscores';
import { IdProp } from '../../../../types/typesPassengers';
import PassengerInput from '../PassengerInput';
import { useInitInput } from '../useInitInput';

export default function PassengerDocseries({ id }: IdProp) {
    const name = 'document_series';
    const symbols = 4;
    const reg = '^\\d{4}$';

    const { inputState, ref, validate } = useInitInput(id, name);

    useEffect(() => {
        if (!ref.current) return;
        const input = ref.current;

        validate(input);
    }, [inputState.value]);

    return (
        <div className='passenger-form-col passenger-form-col-document'>
            <label className='passenger-input-label' htmlFor='docseries'>
                Серия
            </label>
            <PassengerInput
                required
                parrentRef={ref}
                id={id}
                state={inputState}
                name={name}
                pattern={reg}
                placeholder={`${symbols} символа`}
                className='input input-number input-passport'
            />
            <PlaceholderUnderscores
                cls='passport' amount={symbols}
                state={inputState}
            />
        </div>
    );
}
