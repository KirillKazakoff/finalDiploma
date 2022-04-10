import React, { useEffect, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks';
import PassengersPlacesAdd from '../lib/Passengers/PassengersPlacesAdd';
import PassengersAdd from '../lib/Passengers/PassengersAdd';
import PassengersForm from '../lib/Passengers/PassengersForm';
import PassengerForm from '../lib/Passengers/PassengerForm/PassengerForm';
import TripDetailsDirs from '../lib/Aside/TripDetails/TripDetailsDirs';
import PassengersTotalPlaces from '../lib/Passengers/PassengersTotalPlaces';
import { setPageCount } from '../../redux/slices/loaderSlice';

export default function PassengersRoute() {
    const dispatch = useAppDispatch();
    const formsData = useAppSelector((state) => state.passengers);

    const formsLength = Object.keys(formsData).length;
    const forms = useMemo(() => {
        return Object.keys(formsData).map((id, index) => (
            <PassengerForm
                key={id} index={index}
                id={id}
            />
        ));
    }, [formsLength]);

    useEffect(() => {
        dispatch(setPageCount(2));
    }, []);

    return (
        <main className='main main-central framed'>
            <aside className='aside-central'>
                <TripDetailsDirs />
            </aside>

            <section className='content-central'>
                <PassengersTotalPlaces />
                <div className='passengers'>
                    {forms}
                    <PassengersAdd />
                    <PassengersPlacesAdd />
                </div>
                <PassengersForm />
            </section>
        </main>
    );
}
