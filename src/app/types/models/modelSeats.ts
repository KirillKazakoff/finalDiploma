import type { PriceInfoCoachT } from './modelTickets';

export type CoachFeaturesT = {
    _id: string;
    name: string;
    class_type: string;
    have_wifi: boolean;
    have_air_conditioning: boolean;
    price: number;
    top_price: number;
    bottom_price: number;
    side_price: number;
    linens_price: number;
    wifi_price: number;
    is_linens_included: boolean;
    available_seats: number;
    train: string;
};

export type SeatT = {
    index: number;
    available: boolean;
};

export type SeatFullT = SeatT & {
    placeType: string;
    carType: string;
    price: number;
    selected: boolean;
    disabled: boolean;
};

export type SeatsCoachT = {
    coach: CoachFeaturesT;
    seats: SeatT[];
};

export type SeatsTypesT = {
    [key: string]: number;

    total: number;
    side?: number;
    bottom?: number;
    top?: number;
    nochoice?: number;
};

export type SeatsTypesInfoT = {
    [key: string]: SeatsTypesT;

    first?: SeatsTypesT;
    second?: SeatsTypesT;
    third?: SeatsTypesT;
    fourth?: SeatsTypesT;
};

export type TotalSeatsTypeT = {
    minPriceType: PriceInfoCoachT;
    availableType: SeatsTypesT;
};
export type TotalSeatsInfoT = {
    [key: string]: TotalSeatsTypeT;

    first?: TotalSeatsTypeT;
    second?: TotalSeatsTypeT;
    third?: TotalSeatsTypeT;
    fourth?: TotalSeatsTypeT;
};

export type SeatsCoachInfoT = {
    available: SeatsTypesT;
    seatsFull: SeatFullT[];
};

export type CarInfoT = {
    coach: CoachFeaturesT;
    seatsInfo: SeatsCoachInfoT;
    carNumber: number;
};
