/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
import { useAppDispatch } from '../redux/reduxHooks';
import { OnFocusT, PayloadFocus, InputDefault } from '../types';
import { OnChangeFieldT, UseFormT } from './typesForms';

const useForm: UseFormT = (changeInput, setActive, setBlured) => {
    const dispatch = useAppDispatch();

    const onChange: OnChangeFieldT = (input) => {
        const changedInput: InputDefault = {
            name: input.name,
            value: input.value,
        };

        dispatch(changeInput(changedInput));
    };

    const onFocus: OnFocusT = (e) => {
        const input: PayloadFocus = {
            name: e.currentTarget.name,
            isActive: true,
        };
        dispatch(setActive(input));
    };

    const onBlur: OnFocusT = (e) => {
        const { name } = e.currentTarget;
        const input: PayloadFocus = {
            name,
            isActive: false,
            wasFocused: true,
        };

        // onChange(e.currentTarget);

        // predict bluring
        setTimeout(() => {
            dispatch(setBlured(input));
            dispatch(setActive(input));
        }, 180);
    };

    return { onChange, onFocus, onBlur };
};

export default useForm;
