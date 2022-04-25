import { useAppDispatch } from '../../../../redux/reduxHooks';
import { UseSelectT, OnFocusT } from '../../../../types/typesForms';
import { PayloadFocus } from '../../../../types/typesPayload';

const useSelect: UseSelectT = (setActive, setBlured, formId) => {
    const dispatch = useAppDispatch();

    const onFocus: OnFocusT = (e) => {
        const input: PayloadFocus = {
            name: e.currentTarget.name,
            isActive: true,
            id: formId,
        };

        dispatch(setActive(input));
    };

    const onBlur: OnFocusT = (e) => {
        const { name } = e.currentTarget;
        const input: PayloadFocus = {
            name,
            isActive: false,
            wasFocused: true,
            id: formId,
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
