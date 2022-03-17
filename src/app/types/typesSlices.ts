import type { DateT, PickerStateT } from '../components/lib/DatePicker/utils/timeTypes';
import type { InputState } from '../redux/reduxInputUtils';

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

export type SortTypeT = 'date' | 'price' | 'duration';

// FilterSlice
export type FilterStateT = {
    aside: {
        togglers: {
            [key: string]: boolean;
            have_first_class: boolean;
            have_second_class: boolean;
            have_third_class: boolean;
            have_fourth_class: boolean;
            have_wifi: boolean;
            have_express: boolean;
        };

        sliders: {
            cost: {
                [key: string]: number;
                price_from: number;
                price_to: number;
                minTotal: number;
                maxTotal: number;
            };
            hourDeparture: {
                [key: string]: number;
                start_departure_hour_from: number;
                start_departure_hour_to: number;
                end_departure_hour_from: number;
                end_departure_hour_to: number;
            };
            hourArrival: {
                [key: string]: number;
                start_arrival_hour_from: number;
                start_arrival_hour_to: number;
                end_arrival_hour_from: number;
                end_arrival_hour_to: number;
            };
        };
    };
    top: {
        sort: SortTypeT;
        limit: number;
        offset: number;
    };
};
