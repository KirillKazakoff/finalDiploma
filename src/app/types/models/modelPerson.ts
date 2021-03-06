import { FormStatusT } from '../../redux/slices/utils/reduxFormUtils';
import { InputState } from '../../redux/slices/utils/reduxInputUtils';
import { Fields } from '../typesForms';

export type FullNameT = {
    first_name: string;
    last_name: string;
    patronymic: string;
};

export type UserT = FullNameT & {
    phone: string;
    email: string;
    payment_method: string;
};

export type PersonT = FullNameT & { id: string } & {
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
    } & Fields;
    isMsgHidden: boolean;
    statusValidity: FormStatusT;
    isChildForm: boolean;
};

// modelPerson
export type OrderPersonInfoT = {
    is_adult: boolean;
    gender: boolean;
    birthday: string;
    document_type: string;
    document_data: string;
    is_impaired: boolean;
} & FullNameT;

export type OrderRouteSeatT = {
    coach_id: string;
    person_info: OrderPersonInfoT;
    include_children_seat: boolean;
    seat_number: number;
};

export type OrderRouteT = {
    route_direction_id: string;
    seats: OrderRouteSeatT[];
};

export type OrderT = {
    user: UserT;
    departure: OrderRouteT;
    arrival?: OrderRouteT;
};
