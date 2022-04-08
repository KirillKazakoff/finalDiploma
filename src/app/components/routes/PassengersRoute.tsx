import React, { useMemo } from 'react';
import TripDetailsDirs from '../lib/Aside/TripDetails/TripDetailsDirs';
import PassengerForm from '../lib/Passengers/PassengerForm';
import PassengersAdd from '../lib/Passengers/PassengersAdd';
import PassengersNextSection from '../lib/Passengers/PassengersNextSection';
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks';
import Form from '../lib/Common/Form';
import InfoError from '../lib/Common/Info/InfoError';

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
                </div>
                <Form cls='passengers-total-form' onSubmitForm={onSubmit}>
                    <PassengersNextSection />
                </Form>
            </section>
        </main>
    );
}
