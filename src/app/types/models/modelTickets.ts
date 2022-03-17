import { SeatsTypesInfoT, CoachSeatsFullT, TotalSeatsInfoT } from './modelSeats';
import { TrainInfoT } from '../../components/lib/Tickets/getTrainInfo';
import { FetchStatusT } from '../typesPayload';

// TrainRouteT
export type PriceInfoCoachT = {
    [index: string]: number;

    price?: number;
    top_price?: number;
    bottom_price?: number;
    side_price?: number;
    linens_price?: number;
    wifi_price?: number;
};

export type PriceInfoT = {
    [index: string]: PriceInfoCoachT;

    first?: PriceInfoCoachT;
    second?: PriceInfoCoachT;
    third?: PriceInfoCoachT;
    fourth?: PriceInfoCoachT;
};

export type StationT = {
    railway_station_name: string;
    city: {
        _id: string;
        name: string;
    };
    datetime: number;
};

export type ExtrasT = {
    have_wifi: boolean;
    have_air_conditioning: boolean;
    is_express: boolean;
};

export type TrainRouteT = {
    _id: string;
    have_first_class: boolean;
    have_second_class: boolean;
    have_third_class: boolean;
    have_fourth_class: boolean;
    train: {
        _id: string;
        name: string;
    };
    from: StationT;
    to: StationT;
    min_price: number;
    duration: number;
    price_info: PriceInfoT;
    available_seats_info: SeatsTypesInfoT;
    coaches: CoachSeatsFullT;
} & ExtrasT;

// TicketRouteT
export type TicketCoachsT = {
    have_first_class: boolean;
    have_second_class: boolean;
    have_third_class: boolean;
    have_fourth_class: boolean;
};

export type TicketRouteT = {
    min_price: number;
    departure: TrainRouteT;
    arrival?: TrainRouteT;
    available_seats_info: SeatsTypesInfoT;
    avaliable_seats: number;
} & ExtrasT &
TicketCoachsT;

export type TrainInfoFullT = { routeName: string; trainInfo: TrainInfoT };
export type TicketInfoT = {
    id: string;
    seatsInfoAux: TotalSeatsInfoT;
    trainsInfo: TrainInfoFullT[];
    ticketRoute: TicketRouteT;
};

export type TicketsResponseT = {
    total_count: number;
    items: TicketRouteT[];
};

export type TicketsT = {
    total_count: number;
    tickets: TicketInfoT[];
};

export type TicketsStateT = {
    ticketsInfo: TicketsT;
    statusFetch: FetchStatusT;
};
