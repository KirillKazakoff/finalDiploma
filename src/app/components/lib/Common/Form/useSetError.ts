import { useAppDispatch } from '../../../../redux/reduxHooks';
import { SetErrorT } from '../../../../types/typesPayload';

type UseSetErrorT = (
    name: string,
    setError: SetErrorT,
    id?: string
) => (value: string) => void;

export const useSetError: UseSetErrorT = (name, setInput, id) => {
    const dispatch = useAppDispatch();

    const setErrorHandler = (error: string) => {
        const dispatchObj = {
            id,
            name,
            error,
        };

        dispatch(setInput(dispatchObj));
    };
    return setErrorHandler;
};
