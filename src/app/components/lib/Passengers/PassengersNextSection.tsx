import React from 'react';
import { FormStatusT } from '../../../redux/slices/utils/reduxFormUtils';

type Props = { formsStatus: FormStatusT };
export default function PassengersNextSection({ formsStatus }: Props) {
    return (
        <div className='passengers-next-route-wrapper'>
            <button className='btn btn-next-section' type='submit'>
                Далее
            </button>
        </div>
    );
}
