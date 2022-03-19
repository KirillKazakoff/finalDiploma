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

// FilterSlice
export type FilterStateT = {
    aside: {
        togglers: TogglersT;

        sliders: {
            cost: {
                [key: string]: number;
                price_from: number;
                price_to: number;
                minTotal: number;
                maxTotal: number;
            };
            hourDeparture: HourStateT;
            hourArrival: HourStateT;
        };
    };
    top: {
        sort: SortTypeT;
        limit: number;
        offset: number;
    };
};
