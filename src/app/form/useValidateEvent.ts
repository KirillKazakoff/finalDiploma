import { useAppDispatch } from '../redux/reduxHooks';
import inputMessages from '../components/lib/Search/messages';
import { SetErrorT } from '../types/typesPayload';
import { OnChangeT } from '../types/typesForms';

const useValidateEvent = (setError: SetErrorT) => {
    const dispatch = useAppDispatch();

    const validate: OnChangeT = (e) => {
        const input = e.currentTarget;

        const validity = input.validity as ValidityState & {
            [key: string]: boolean;
        };

        if (validity.valid) {
            dispatch(setError({ name: input.name, error: '' }));
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

        dispatch(setError({ name: input.name, error: errMsg as string }));
    };

    return validate;
};

export default useValidateEvent;
