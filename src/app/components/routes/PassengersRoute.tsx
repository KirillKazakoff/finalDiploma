/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import TripDetailsDirs from '../lib/Aside/TripDetails/TripDetailsDirs';
import PassengerForm from '../lib/Passengers/PassengerForm';
import PassengersAdd from '../lib/Passengers/PassengersAdd';
import PassengersNextSection from '../lib/Passengers/PassengersNextSection';
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks';
import { selectPlacesLengthArr } from '../../redux/slices/utils/selectPlacesLength';
import { initState } from '../../redux/slices/passengersSlice';

export default function PassengersRoute() {
    const dispatch = useAppDispatch();
    const lengthArr = useAppSelector(selectPlacesLengthArr);
    console.log(lengthArr);
    const formsData = useAppSelector((state) => state.passengers);
    console.log(formsData);
    const forms = Object.entries(formsData).map(([id, form], index) => (
        <PassengerForm
            key={id} index={index}
            form={form}
        />
    ));

    useEffect(() => {
        dispatch(initState());
    }, []);

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
