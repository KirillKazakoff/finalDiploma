/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import TripDetailsDirs from '../lib/Aside/TripDetails/TripDetailsDirs';
import PassengerForm from '../lib/Passengers/PassengerForm';
import PassengersAdd from '../lib/Passengers/PassengersAdd';
import PassengersNextSection from '../lib/Passengers/PassengersNextSection';
import { useAppSelector } from '../../redux/reduxHooks';
import { selectPlacesLengthArr } from '../../redux/slices/utils/selectPlacesLength';

export default function PassengersRoute() {
    const lengthArr = useAppSelector(selectPlacesLengthArr);
    const forms = lengthArr.map((index) => <PassengerForm index={index} key={index} />);

    return (
        <main className='main main-central framed'>
            <aside className='aside-central'>
                <TripDetailsDirs />
            </aside>

            <section className='content-central'>
                <div className='passengers'>
                    {forms}
                    <PassengersAdd />
                </div>
                <PassengersNextSection />
            </section>
        </main>
    );
}
