/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function PassengerForm() {
    return (
        <form className='passenger-form shadowed'>
            <header className='passenger-header framed-passengers'>
                <button
                    className='passenger-collapse passenger-collapse-minus'
                    type='button'
                >
                    <img src='./svg/actions/minus.svg' alt='collapse-minus' />
                </button>
                <span className='passenger-desc'>Пассажир 1</span>
                <button className='passengers-remove' type='button'>
                    <img src='./svg/actions/cross-mark.svg' alt='passenger-remove' />
                </button>
            </header>

            <section className='passenger-form-section framed-passenger-section passenger-main-data'>
                <div className='passenger-form-row'>
                    <div className='passenger-form-col'>
                        <div className='passenger-input-wrapper select select-age-category'>
                            <div className='selected-option age-selected-option'>
                                Взрослый
                            </div>
                            <img
                                src='./svg/actions/select-arrow.svg'
                                alt='select-arrow'
                            />
                            <ul className='options options-age-category'>
                                <li className='option age-option'>Взрослый</li>
                                <li className='option age-option'>Ребенок1</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='passenger-form-row passenger-fullname'>
                    <div className='passenger-form-col'>
                        <label className='passenger-input-label' htmlFor='second-name'>
                            Фамилия
                        </label>
                        <div className='passenger-input-wrapper'>
                            <input id='second-name' className='input' />
                        </div>
                    </div>
                    <div className='passenger-form-col'>
                        <label className='passenger-input-label' htmlFor='name'>
                            Имя
                        </label>
                        <div className='passenger-input-wrapper'>
                            <input id='name' className='input' />
                        </div>
                    </div>
                    <div className='passenger-form-col'>
                        <label className='passenger-input-label' htmlFor='surname'>
                            Отчество
                        </label>
                        <div className='passenger-input-wrapper'>
                            <input id='surname' className='input' />
                        </div>
                    </div>
                </div>
                <div className='passenger-form-row passenger-bio'>
                    <div className='passenger-form-col passenger-form-col-sex'>
                        <label className='passenger-input-label'>Пол</label>
                        <div className='passenger-input-wrapper passenger-input-wrapper-sex'>
                            <span className='sex-field'>М</span>
                            <span className='sex-field sex-field-active'>Ж</span>
                        </div>
                    </div>
                    <div className='passenger-form-col passenger-form-col-birthdate'>
                        <label className='passenger-input-label' htmlFor='birthdate'>
                            Дата рождения
                        </label>
                        <div className='passenger-input-wrapper'>
                            <input id='birthdate' className='input' />
                        </div>
                    </div>
                </div>
                <div className='passenger-form-row passenger-disabled'>
                    <div className='passenger-form-col passenger-form-col-checkbox'>
                        <span className='checkbox disabled-checkbox' />
                        <span className='disabled-desc'>ограниченная подвижность</span>
                    </div>
                </div>
            </section>
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
                            <img
                                src='./svg/actions/select-arrow.svg'
                                alt='select-arrow'
                            />
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
            <section className='passenger-form-section framed-passenger-section passenger-next'>
                <button className='btn btn-passenger-next' type='button'>
                    Следующий пассажир
                </button>
            </section>
        </form>
    );
}
