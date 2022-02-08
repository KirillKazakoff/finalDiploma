/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
import { useAppDispatch } from '../redux/reduxHooks';
// import { changeInput, setActive, setBlured } from '../redux/slices/searchWaySlice';
import { InputField, OnFocusT, PayloadFocus } from '../types';
import getValidity from './getValidity';
import { OnChangeFieldT, UseFormT } from './typesForms';

const useForm: UseFormT = (changeInput, setActive, setBlured) => {
    const dispatch = useAppDispatch();

    const onChangeValidate: OnChangeFieldT = (input) => {
        const validity = getValidity(input);

        const changedInput: InputField = {
            name: input.name,
            value: input.value,
            ...validity,
        };

        console.log(validity.error);
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

        onChangeValidate(e.currentTarget);

        // predict bluring
        setTimeout(() => {
            dispatch(setActive(input));
            dispatch(setBlured(input));
        }, 180);
    };

    return { onChangeValidate, onFocus, onBlur };
};

export default useForm;
