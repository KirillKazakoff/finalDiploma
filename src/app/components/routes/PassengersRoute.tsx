import React, { useMemo } from 'react';
import TripDetailsDirs from '../lib/Aside/TripDetails/TripDetailsDirs';
import PassengerForm from '../lib/Passengers/PassengerForm';
import PassengersNextSection from '../lib/Passengers/PassengersNextSection';
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks';
import Form from '../lib/Common/Form';
import PassengersPlacesAdd from '../lib/Passengers/PassengerPlacesAdd';
import PassengersAdd from '../lib/Passengers/PassengersAdd';

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

    const onSubmit = () => {
        console.log('hello');
    };

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
                <Form cls='passengers-total-form' onSubmitForm={onSubmit}>
                    <PassengersNextSection />
                </Form>
            </section>
        </main>
    );
}
