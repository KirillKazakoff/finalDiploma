/* eslint-disable no-underscore-dangle */
import { createSelector } from '@reduxjs/toolkit';
import { selectUserInfo } from './selectUserInfo';
import { selectActiveTicket } from '../placesSlice';
import { PasPlaceT, selectPasPlaces } from '../pasPlacesSlice';
import { OrderRouteT, OrderPersonInfoT } from '../../../types/models/modelPerson';

const getOrderRoute = (pasPlaces: PasPlaceT[]): OrderRouteT => {
    const seats = pasPlaces.map((pasPlace) => {
        const person_info = { ...pasPlace.person_info };
        delete person_info.id;
        delete person_info.include_children_seat;
        person_info as OrderPersonInfoT;

        const seat = {
            coach_id: pasPlace.coach_id,
            seat_number: pasPlace.seat_number,
            include_children_seat: pasPlace.person_info.include_children_seat,
            person_info,
        };

        return seat;
    });

    return {
        route_direction_id: '',
        seats,
    };
};

export const selectOrder = createSelector(
    [selectUserInfo, selectPasPlaces, selectActiveTicket],
    (user, pasPlaces, ticket) => {
        const departure = getOrderRoute(pasPlaces.departure);
        departure.route_direction_id = ticket.ticketRoute.departure._id;

        let arrival;
        if (pasPlaces.arrival.length > 0) {
            arrival = getOrderRoute(pasPlaces.arrival);
            arrival.route_direction_id = ticket.ticketRoute.arrival._id;
        }

        const orderInfo = {
            user,
            departure,
            arrival,
        };

        return orderInfo;
    },
);
