import { useAppDispatch } from '../../../redux/reduxHooks';
import { setInput } from '../../../redux/slices/passengersSlice';

export const useSetInput = (id: string, name: string) => {
    const dispatch = useAppDispatch();

    const setInputHandler = (value: string) => {
        const dispatchObj = {
            id,
            name,
            value,
        };

        dispatch(setInput(dispatchObj));
    };
    return setInputHandler;
};
