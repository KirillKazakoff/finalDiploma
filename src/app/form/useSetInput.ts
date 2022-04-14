import { useAppDispatch } from '../redux/reduxHooks';
import { SetInputT } from '../types/typesPayload';

type UseSetInputT = (
    name: string,
    setInput: SetInputT,
    id?: string
) => (value: string) => void;

export const useSetInput: UseSetInputT = (name, setInput, id) => {
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
