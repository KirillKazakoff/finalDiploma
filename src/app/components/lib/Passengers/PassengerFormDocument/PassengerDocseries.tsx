import React from 'react';
import PlaceholderUnderscores from '../../Common/PlaceholderUnderscores';

export default function PassengerDocseries() {
    const symbols = 4;

    return (
        <div className='passenger-form-col passenger-form-col-document'>
            <label className='passenger-input-label' htmlFor='docseries'>
                Серия
            </label>
            <div className='passenger-input-wrapper passenger-input-wrapper-number'>
                <PlaceholderUnderscores cls='passport' amount={symbols} />

                <input
                    id='docseries'
                    className='input input-number input-passport'
                    placeholder={`${symbols} символа`}
                    pattern='^d{6}$'
                />
            </div>
        </div>
    );
}
