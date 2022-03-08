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

// FilterSlice
export type FilterStateT = {
    togglers: {
        [key: string]: boolean;
        have_first_class: boolean;
        have_second_class: boolean;
        have_third_class: boolean;
        have_fourth_class: boolean;
        have_wifi: boolean;
        have_express: boolean;
    };
    cost: {
        [key: string]: number;
        price_from: number;
        price_to: number;
    };
    time: {
        [key: string]: number;
        start_departure_hour_from: number;
        start_departure_hour_to: number;
        start_arrival_hour_from: number;
        start_arrival_hour_to: number;

        end_departure_hour_from: number;
        end_departure_hour_to: number;
        end_arrival_hour_from: number;
        end_arrival_hour_to: number;
    };
};
