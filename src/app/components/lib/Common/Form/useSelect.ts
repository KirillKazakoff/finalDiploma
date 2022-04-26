import { useAppDispatch } from '../../../../redux/reduxHooks';
import { UseSelectT, OnFocusT } from '../../../../types/typesForms';
import { PayloadBlur, PayloadFocus } from '../../../../types/typesPayload';

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
        const inputBlur: PayloadBlur = {
            name,
            wasFocused: true,
            id: formId,
        };

        const inputFocus: PayloadFocus = {
            name,
            id: formId,
            isActive: false,
        };

        // predict bluring
        setTimeout(() => {
            dispatch(setActive(inputFocus));
            dispatch(setBlured(inputBlur));
        }, 180);
    };

    return { onBlur, onFocus };
};

export default useSelect;
