import React from 'react';
import { IdProp } from '../../../../../types/typesPassengers';
import PassengerCheckAddChild from './PassengerCheckAddChild';
import PassengerCheckImpaired from './PassengerCheckImpaired';

export default function PassengerCheckboxes({ id }: IdProp) {
    return (
        <div className='passenger-form-row passenger-disabled'>
            <PassengerCheckImpaired id={id} />
            <PassengerCheckAddChild id={id} />
        </div>
    );
}
