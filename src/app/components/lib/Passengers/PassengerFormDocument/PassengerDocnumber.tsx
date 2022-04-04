import React from 'react';
import PlaceholderUnderscores from '../../Common/PlaceholderUnderscores';
import { mapDocClass } from './mapDocClasses';
import { mapDocnumber } from './mapDocnumber';

type Props = { doctype: string };
export default function PassengerDocnumber({ doctype }: Props) {
    const clsType = mapDocClass(doctype);
    const { reg, symbols } = mapDocnumber(doctype);

    return (
        <div className='passenger-form-col passenger-form-col-document'>
            <label className='passenger-input-label' htmlFor='docnumber'>
                Номер
            </label>
            <div className='passenger-input-wrapper passenger-input-wrapper-number'>
                <PlaceholderUnderscores cls={clsType} amount={symbols} />
                <input
                    id='docnumber'
                    className={`input input-number input-${clsType}`}
                    placeholder={`${symbols} символов`}
                    pattern={reg}
                />
            </div>
        </div>
    );
}
