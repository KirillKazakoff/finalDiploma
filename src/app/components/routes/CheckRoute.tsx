import React, { useEffect } from 'react';
import { useAppDispatch } from '../../redux/reduxHooks';
import { setPageCount } from '../../redux/slices/loaderSlice';
import TripDetailsFull from '../lib/Aside/TripDetails/TripDetailsFull';
import CheckTrain from '../lib/Check/CheckTrain';
import BtnNextRouteNav from '../lib/Common/BtnNextRouteNav';

export default function CheckRoute() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setPageCount(4));
    }, []);

    return (
        <main className='main main-central framed'>
            <aside className='aside-central'>
                <TripDetailsFull />
            </aside>

            <section className='content-central confirmation-content-central'>
                <CheckTrain />

                <section className='confirmation-section shadowed'>
                    <header className='passenger-header confirmation-passenger-header framed-passengers'>
                        <span className='passenger-desc'>Пассажиры</span>
                    </header>

                    <div className='confirmation-container'>
                        <ul className='confirmation-list'>
                            <li className='confirmation-list-row'>
                                <div className='confirmation-list-col'>
                                    <img
                                        height='68px'
                                        src='./svg/ava-default.svg'
                                        alt='avatar'
                                    />
                                    <span className='confirmation-passenger-desc'>
                                        Взрослый
                                    </span>
                                </div>
                                <div className='confirmation-list-col'>
                                    <span className='confirmation-passenger-title'>
                                        Мартынюк Ирина Эдуардовна
                                    </span>
                                    <ul className='confirmation-passenger-details'>
                                        <li className='confirmation-passenger-detail'>
                                            Пол женский
                                        </li>
                                        <li className='confirmation-passenger-detail'>
                                            Дата рождения 19.06.1982
                                        </li>
                                        <li className='confirmation-passenger-detail'>
                                            Паспорт РФ 4204380694
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <div className='confirmation-change confirmation-total'>
                            <div className='confirmation-total-cost'>
                                <span className='confirmation-total-cost-desc'>
                                    Всего
                                </span>
                                <div className='cost-count-container'>
                                    <span className='cost-count'>7 760</span>
                                    <span className='cost-money-symbol'>Р</span>
                                </div>
                            </div>
                            <button type='button' className='btn btn-change'>
                                Изменить
                            </button>
                        </div>
                    </div>
                </section>
                <section className='confirmation-section confirmation-section-payment shadowed'>
                    <header className='passenger-header confirmation-passenger-header framed-passengers'>
                        <span className='passenger-desc'>Способ оплаты</span>
                    </header>
                    <div className='confirmation-container'>
                        <ul className='confirmation-list'>
                            <li className='confirmation-list-row'>
                                <div className='confirmation-list-col'>
                                    <span className='confirmation-payment-way'>
                                        Наличными
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <div className='confirmation-change'>
                            <button type='button' className='btn btn-change'>
                                Изменить
                            </button>
                        </div>
                    </div>
                </section>
                <BtnNextRouteNav
                    to='somewhere' disabled={false}
                    desc='Подтвердить'
                />
            </section>
        </main>
    );
}
