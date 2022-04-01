/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import TripDetailsDirs from '../lib/Aside/TripDetails/TripDetailsDirs';
import PassengerForm from '../lib/Passengers/PassengerForm';
import PassengersAdd from '../lib/Passengers/PassengersAdd';
import PassengersNextSection from '../lib/Passengers/PassengersNextSection';

export default function PassengersRoute() {
    return (
        <main className='main main-central framed'>
            <aside className='aside-central'>
                <TripDetailsDirs />
            </aside>

            <section className='content-central'>
                <div className='passengers'>
                    <PassengerForm />

                    <form className='passenger-form shadowed'>
                        <header className='passenger-header framed-passengers'>
                            <button
                                className='passenger-collapse passenger-collapse-plus'
                                type='button'
                            >
                                <img src='./svg/actions/plus.svg' alt='collapse-minus' />
                            </button>
                            <span className='passenger-desc'>Пассажир 2</span>
                        </header>
                    </form>

                    <PassengersAdd />
                </div>
                <PassengersNextSection />
            </section>
        </main>
    );
}
