import { SeatsTypesInfoT, TotalSeatsInfoT, CarInfoT } from './modelSeats';
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

export type ExtrasPricesCarT = {
    [key: string]: number | 'isIncluded';

    wifi_price?: number | 'isIncluded';
    linens_price?: number | 'isIncluded';
    conditioner?: number | 'isIncluded';
};

export type ExtrasPricesWithCarT = {
    prices: ExtrasPricesCarT;
    carNumber: number;
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
    coaches: CarInfoT;
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
    costLimits: {
        [key: string]: number;
        minTotal: number;
        maxTotal: number;
    };
    activeTicket: TicketInfoT | null;
};
