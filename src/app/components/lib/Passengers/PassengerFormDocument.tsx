/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function PassengerFormDocument() {
    return (
        <section className='passenger-form-section framed-passenger-section passenger-document'>
            <div className='passenger-form-row passenger-form-row-document'>
                <div className='passenger-form-col passenger-form-col-document'>
                    <label className='passenger-input-label' htmlFor='docseries'>
                        Серия
                    </label>
                    <div className='passenger-input-wrapper select select-doctype'>
                        <div className='selected-option selected-option-doctype'>
                            Паспорт РФ
                        </div>
                        <img src='./svg/actions/select-arrow.svg' alt='select-arrow' />
                        <ul className='options options-doctype'>
                            <li className='option option-doctype'>Паспорт РФ</li>
                            <li className='option option-doctype'>
                                Свидетельство о рождении
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='passenger-form-col passenger-form-col-document'>
                    <label className='passenger-input-label' htmlFor='docseries'>
                        Серия
                    </label>
                    <div className='passenger-input-wrapper passenger-input-wrapper-number'>
                        <input
                            id='docseries'
                            className='input input-number input-docseries'
                            placeholder='__   __   __   __'
                        />
                    </div>
                </div>
                <div className='passenger-form-col passenger-form-col-document'>
                    <label className='passenger-input-label' htmlFor='docnumber'>
                        Номер
                    </label>
                    <div className='passenger-input-wrapper passenger-input-wrapper-number'>
                        <input
                            id='docnumber'
                            className='input input-number input-docnumber'
                            placeholder='__   __   __   __   __   __'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
