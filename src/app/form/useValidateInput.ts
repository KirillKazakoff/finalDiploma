import { useAppDispatch } from '../redux/reduxHooks';
import inputMessages from '../components/lib/Search/messages';
import { SetErrorT } from '../types/typesPayload';

const useValidateInput = (setError: SetErrorT, formId?: string) => {
    const dispatch = useAppDispatch();

    const validate = (input: HTMLInputElement) => {
        if (!input) return;
        const validity = input.validity as ValidityState & {
            [key: string]: boolean;
        };

        if (validity.valid) {
            dispatch(setError({ name: input.name, error: '', id: formId }));
            return;
        }

        let error;
        // eslint-disable-next-line no-restricted-syntax
        for (const key in validity) {
            if (validity[key]) {
                error = key;
            }
        }

        if (error === 'customError') error = input.validationMessage;
        const errMsg = inputMessages[input.name][error as string];
        const state = { name: input.name, error: errMsg as string, id: formId };

        dispatch(setError(state));
    };

    return validate;
};

export default useValidateInput;
