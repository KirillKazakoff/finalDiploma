/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useMemo } from 'react';
import TripDetailsDirs from '../lib/Aside/TripDetails/TripDetailsDirs';
import PassengerForm from '../lib/Passengers/PassengerForm';
import PassengersAdd from '../lib/Passengers/PassengersAdd';
import PassengersNextSection from '../lib/Passengers/PassengersNextSection';
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks';
import { selectPlacesLengthArr } from '../../redux/slices/utils/selectPlacesLength';
import { initState } from '../../redux/slices/passengersSlice';

export default function PassengersRoute() {
    const dispatch = useAppDispatch();
    const placesAmount = useAppSelector(selectPlacesLengthArr);
    const formsData = useAppSelector((state) => state.passengers);

    const formsLength = Object.keys(formsData).length;
    const forms = useMemo(() => {
        console.log(formsData);
        return Object.keys(formsData).map((id, index) => (
            <PassengerForm
                key={id} index={index}
                id={id} form={formsData[id]}
            />
        ));
    }, [formsLength]);

    // useEffect(() => {
    //     console.log('hello');
    // }, []);

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
