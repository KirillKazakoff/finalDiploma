import { useAppDispatch } from '../../../redux/reduxHooks';
import { setError } from '../../../redux/slices/passengersSlice';

export const useBoxValidate = (id: string, name: string) => {
    const dispatch = useAppDispatch();

    const clear = () => {
        const dispatchObj = {
            id,
            name,
            error: '',
        };

        dispatch(setError(dispatchObj));
    };
    return clear;
};
