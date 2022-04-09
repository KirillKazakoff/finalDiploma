import React from 'react';
import { FormStatusT } from '../../../redux/slices/utils/reduxFormUtils';

type Props = { formsStatus: FormStatusT };
export default function PassengersNextSection({ formsStatus }: Props) {
    const disabled = formsStatus !== 'success';

    return (
        <div className='passengers-next-route-wrapper'>
            <button
                className='btn btn-next-section' type='submit'
                disabled={disabled}
            >
                Далее
            </button>
        </div>
    );
}
