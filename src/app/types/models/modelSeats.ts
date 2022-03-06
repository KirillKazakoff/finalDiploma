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
    selected: boolean;
    disabled: boolean;
};

export type CoachSeatsT = {
    coach: CoachFeaturesT;
    seats: SeatT[];
};

export type CoachesSeatsT = CoachSeatsT[];
