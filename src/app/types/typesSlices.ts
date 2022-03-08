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
        have_first_class: boolean;
        have_second_class: boolean;
        have_third_class: boolean;
        have_fourth_class: boolean;
        have_wifi: boolean;
        have_air_conditioning: boolean;
        have_express: boolean;
    };
    cost: {
        [key: string]: number;
        price_from: number;
        price_to: number;
    };
};
