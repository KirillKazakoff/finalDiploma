import React from 'react';
import LastTickets from '../lib/Aside/LastTickets/LastTickets';
import PlacesDir from '../lib/Places/PlacesDir';
import BtnNextRoute from '../lib/Common/BtnNextRoute';
import TripDetailsDirs from '../lib/Aside/TripDetails/TripDetailsDirs';
import { useAppSelector } from '../../redux/reduxHooks';
import { selectActiveTicket } from '../../redux/slices/ticketsSlice';

export default function PlacesRoute() {
    const ticket = useAppSelector(selectActiveTicket);
    if (!ticket) return null;
    console.log(ticket);

    return (
        <main className='main main-central framed'>
            <aside className='aside-central'>
                <TripDetailsDirs />
                <LastTickets />
            </aside>

            <section className='content-central'>
                <div className='places'>
                    <h2 className='places-title'>Выбор мест</h2>
                    <PlacesDir dir='to' />
                    <PlacesDir dir='from' />
                </div>

                <BtnNextRoute to='/something' disabled />
            </section>
        </main>
    );
}
