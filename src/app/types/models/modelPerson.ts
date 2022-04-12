import { FormStatusT } from '../../redux/slices/searchFormSlice';
import { InputState } from '../../redux/slices/utils/reduxInputUtils';

export type FullNameT = {
    first_name: string;
    last_name: string;
    patronymic: string;
};

export type UserT = FullNameT & {
    phone: number;
    email: string;
    payment_method: 'cash' | 'online';
};

export type PersonT = FullNameT & {
    is_adult: boolean;
    gender: boolean;
    birthday: string;
    document_type: string;
    document_data: string;
    is_impaired: boolean;
    include_children_seat: boolean;
};

export type PassengerT = {
    coach_id: string;
    person_info: PersonT;
    seat_number: number;
};

export type PassengerFormT = {
    fields: {
        [key: string]: InputState;

        is_adult: InputState;
        last_name: InputState;
        first_name: InputState;
        patronymic: InputState;
        gender: InputState;
        birthday: InputState;
        is_impaired: InputState;
        include_children_seat: InputState;

        document_type: InputState;
        document_number: InputState;
        document_series: InputState;
    };
    isMsgHidden: boolean;
    statusValidity: FormStatusT;
    isChildForm: boolean;
};
