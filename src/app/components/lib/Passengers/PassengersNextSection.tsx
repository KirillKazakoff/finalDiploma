import React from 'react';
import { FormStatusT } from '../../../redux/slices/utils/reduxFormUtils';

type Props = { formsStatus: FormStatusT };
export default function PassengersNextSection({ formsStatus }: Props) {
    return (
        <div className='next-route-wrapper'>
            <button className='btn btn-next-section' type='submit'>
                Далее
            </button>
        </div>
    );
}
