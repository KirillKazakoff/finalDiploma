import { useAppDispatch } from '../../../redux/reduxHooks';
import { setError } from '../../../redux/slices/passengersSlice';

export const useSetError = (name: string, id?: string) => {
    const dispatch = useAppDispatch();

    const setErrorHander = (error: string) => {
        const dispatchObj = {
            id,
            name,
            error,
        };

        dispatch(setError(dispatchObj));
    };
    return setErrorHander;
};
