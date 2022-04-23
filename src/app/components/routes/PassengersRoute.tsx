import React, { useEffect, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks';
import PassengersPlacesAdd from '../lib/Passengers/PassengersPlacesAdd';
import PassengersAdd from '../lib/Passengers/PassengersAdd';
import PassengersForm from '../lib/Passengers/PassengersForm';
import PassengerForm from '../lib/Passengers/PassengerForm/PassengerForm';
import TripDetailsDirs from '../lib/Aside/TripDetails/TripDetailsDirs';
import PassengersPlacesInfo from '../lib/Passengers/PassengersTotalPlaces';
import { setPageCount } from '../../redux/slices/loaderSlice';
import { selectPassengersForms } from '../../redux/slices/passengersSlice';

export default function PassengersRoute() {
    const dispatch = useAppDispatch();
    const formsData = useAppSelector(selectPassengersForms);

    const formsLength = Object.keys(formsData).length;
    const forms = useMemo(() => {
        return Object.keys(formsData).map((id, index) => (
            <PassengerForm
                key={id} index={index}
                id={id}
            />
        ));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formsLength]);

    useEffect(() => {
        dispatch(setPageCount(2));
    }, [dispatch]);

    return (
        <main className='main main-central framed'>
            <aside className='aside-central'>
                <TripDetailsDirs />
            </aside>

            <section className='content-central'>
                <PassengersPlacesInfo />
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
