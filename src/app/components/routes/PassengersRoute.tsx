import React, { useMemo } from 'react';
import { useAppSelector } from '../../redux/reduxHooks';
import PassengersPlacesAdd from '../lib/Passengers/PassengersPlacesAdd';
import PassengersAdd from '../lib/Passengers/PassengersAdd';
import PassengersForm from '../lib/Passengers/PassengersForm';
import PassengerForm from '../lib/Passengers/PassengerForm/PassengerForm';

export default function PassengersRoute() {
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

    return (
        <main className='main main-central framed'>
            {/* <aside className='aside-central'>
                <TripDetailsDirs />
            </aside> */}

            <section className='content-central'>
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
