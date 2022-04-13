import React from 'react';
import LastTickets from '../lib/Aside/LastTickets/LastTickets';
import PlacesDir from '../lib/Places/PlacesDir';
import TripDetailsDirs from '../lib/Aside/TripDetails/TripDetailsDirs';
import { useAppSelector } from '../../redux/reduxHooks';
import { selectActiveTicket } from '../../redux/slices/placesSlice';
import PlacesNextSection from '../lib/Places/PlacesForm';

export default function PlacesRoute() {
    const ticket = useAppSelector(selectActiveTicket);
    if (!ticket) return null;
    const { departure, arrival } = ticket.ticketRoute;
    const [departureSeats, arrivalSeats] = ticket.trainsInfo;

    return (
        <main className='main main-central framed'>
            <aside className='aside-central'>
                <TripDetailsDirs />
                <LastTickets />
            </aside>

            <section className='content-central'>
                <div className='places'>
                    <h2 className='places-title'>Выбор мест</h2>
                    <PlacesDir
                        dir='to' route={departure}
                        seatsInfo={departureSeats}
                    />
                    <PlacesDir
                        dir='from' route={arrival}
                        seatsInfo={arrivalSeats}
                    />
                </div>

                <PlacesNextSection ticketRoute={ticket.ticketRoute} />
            </section>
        </main>
    );
}
