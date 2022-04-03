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
    is_adult: true;
    gender: true;
    birthday: string;
    document_type: 'паспорт' | 'свидетельство о рождении';
    document_data: string;
};

export type PassengerT = {
    coach_id: string;
    person_info: PersonT;
    seat_number: number;
    is_child: boolean;
    is_impaired: boolean;
    include_children_seat: boolean;
};

export type PassengerState = {
    id: string;
    is_adult: InputState;
    last_name: InputState;
    first_name: InputState;
    patronymic: InputState;
    gender: InputState;
    birthday: InputState;
    is_impaired: InputState;
    document_type: InputState;
    document_data: InputState[];
};
