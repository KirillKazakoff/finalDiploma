import type { DateT, PickerStateT } from '../components/lib/DatePicker/utils/timeTypes';
import type { InputState } from '../redux/slices/utils/reduxInputUtils';
import type {
    ExtrasPricesWithCarT,
    TicketInfoT,
    TicketRouteT,
} from './models/modelTickets';
import type { FetchStatusT } from './typesPayload';
import type { SearchedCities } from './typesSearch';
import { CarInfoT } from './models/modelSeats';
import type { PassengerFormT } from './models/modelPerson';

// DateSlice
export type DateStateT = InputState & {
    dateTime: string;
    activeDate: DateT | null;
    pickerState: PickerStateT | null;
};
export type DatesStateT = {
    [key: string]: DateStateT;
    dateTo: DateStateT;
    dateFrom: DateStateT;
};

// WaySlice
export type WayStateT = InputState & SearchedCities & { status: FetchStatusT };
export type WaysStateT = {
    [key: string]: WayStateT;

    wayFrom: WayStateT;
    wayTo: WayStateT;
};

// FilterSlice
export type SortTypeT = 'date' | 'price_min' | 'duration';
export type TopTypeT = {
    sort: SortTypeT;
    limit: number;
    offset: number;
};
export type TogglersT = {
    [key: string]: boolean;
    have_first_class: boolean;
    have_second_class: boolean;
    have_third_class: boolean;
    have_fourth_class: boolean;
    have_wifi: boolean;
    is_express: boolean;
};

export type HourStateT = {
    [key: string]: number;
    start_hour_from: number;
    end_hour_from: number;
    start_hour_to: number;
    end_hour_to: number;
};

export type FilterStateT = {
    aside: {
        togglers: TogglersT;

        sliders: {
            cost: {
                [key: string]: number;
                price_from: number;
                price_to: number;
            };
            hourDeparture: HourStateT;
            hourArrival: HourStateT;
        };
    };
    top: TopTypeT;
};

// lastTicketSlice
export type LastTicketsStateT = { status: FetchStatusT; lastTickets: TicketRouteT[] };

// PlacesSlice
export type ActiveCarT = 'idle' | 'first' | 'second' | 'third' | 'fourth';

export type PlaceT = {
    id: string;
    coach_id: string;
    seat_number: number;
    carNumber: number;
    placeType: string;
    carType: string;
    price: number;
};

export type CarContentT = {
    carriageType: ActiveCarT;
    extras: ExtrasPricesWithCarT[];
    activeCar: CarInfoT;
    places: PlaceT[];
};

export type PlacesStateT = {
    activeTicket: null | TicketInfoT;
    routes: {
        [index: string]: CarContentT;

        arrival: CarContentT;
        departure: CarContentT;
    };
};

// PassengersSlice
export type PassengersStateT = {
    [key: string]: PassengerFormT;
};
