// TrainRouteT

import type { SeatFullT } from './modelSeats';

export type SeatsTypesT = {
    // all: number;
    side?: number;
    bottom?: number;
    top?: number;
    nochoice?: number;
};

export type SeatsCoachInfoT = {
    available: SeatsTypesT;
    seatsFull: SeatFullT[];
};

export type SeatsTrainInfoT = {
    [key: string]: SeatsCoachInfoT;

    first?: SeatsCoachInfoT;
    second?: SeatsCoachInfoT;
    third?: SeatsCoachInfoT;
    fourth?: SeatsCoachInfoT;
};

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

    first: PriceInfoCoachT;
    second: PriceInfoCoachT;
    third: PriceInfoCoachT;
    fourth: PriceInfoCoachT;
};

export type StationT = {
    railway_station_name: string;
    city: {
        _id: string;
        name: string;
    };
    datetime: number;
};

export type TrainRouteT = {
    _id: string;
    have_first_class: boolean;
    have_second_class: boolean;
    have_third_class: boolean;
    have_fourth_class: boolean;
    have_wifi: boolean;
    have_air_conditioning: boolean;
    train: {
        _id: string;
        name: string;
    };
    from: StationT;
    to: StationT;
    min_price: number;
    duration: number;
    price_info: PriceInfoT;
    available_seats_info: SeatsTrainInfoT;
};

// TicketRouteT
export type TicketExtrasT = {
    have_wifi: boolean;
    have_air_conditioning: boolean;
    is_express: boolean;
};

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
    available_seats_info: SeatsTrainInfoT;
    avaliable_seats: number;
} & TicketExtrasT &
TicketCoachsT;

// TicketsT
export type TicketsT = {
    total_count: number;
    items: TicketRouteT[];
};

export type TicketsStateT = TicketsT | null;
