export type InputState = {
    value: string;
    wasFocused: boolean;
    error: string;
    isActive: boolean;
};

const initialInput: InputState = {
    value: '',
    error: '',
    isActive: false,
    wasFocused: false,
};
