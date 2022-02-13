import { useAppDispatch } from '../redux/reduxHooks';
import { OnFocusT, PayloadFocus } from '../types';
import { UseSelectT } from './typesForms';

const useSelect: UseSelectT = (setActive, setBlured) => {
    const dispatch = useAppDispatch();

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

        // predict bluring
        setTimeout(() => {
            dispatch(setActive(input));
            dispatch(setBlured(input));
        }, 180);
    };

    return { onBlur, onFocus };
};

export default useSelect;
