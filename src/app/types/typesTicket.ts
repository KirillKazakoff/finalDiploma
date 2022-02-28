type SeatsT = {
    price?: number;
    top_price?: number;
    bottom_price?: number;
    side_price?: number;
    linens_price?: number;
    wifi_price?: number;
};

type StationT = {
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
    price_info: {
        first: SeatsT;
        second: SeatsT;
        third: SeatsT;
        fourth: SeatsT;
    };
    seats_info: {
        first?: number;
        second?: number;
        third?: number;
        fourth?: number;
    };
};

export type TicketsT = {
    total_count: number;

    items: [
        {
            have_first_class: boolean;
            have_second_class: boolean;
            have_third_class: boolean;
            have_fourth_class: boolean;
            have_wifi: boolean;
            have_air_conditioning: boolean;
            is_express: boolean;
            min_price: number;

            departure: TrainRouteT;
            arrival?: TrainRouteT;
            total_avaliable_seats: number;
        },
    ];
};

export type TicketsStateT = TicketsT | null;
