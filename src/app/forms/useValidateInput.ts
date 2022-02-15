import { useAppDispatch } from '../redux/reduxHooks';
import errorMessages from '../components/lib/Search/errorMsg';
import { setError } from '../redux/slices/searchWaySlice';

const useValidateInput = () => {
    const dispatch = useAppDispatch();

    return (input: HTMLInputElement) => {
        if (!input) return;
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

        let errMsg = errorMessages[input.name][error as string];
        if (errMsg === 'customError') errMsg = input.validationMessage;

        dispatch(setError({ name: input.name, error: errMsg as string }));
    };
};

export default useValidateInput;
