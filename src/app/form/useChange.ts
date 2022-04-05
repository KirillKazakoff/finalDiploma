import { UseChangeT } from '../types/typesForms';
import { useAppDispatch } from '../redux/reduxHooks';

const useChange: UseChangeT = (changeInput, formId?: string) => {
    const dispatch = useAppDispatch();

    return (e) => {
        const { name, value } = e.currentTarget;
        const changedInput = {
            name,
            value,
            id: formId,
        };

        dispatch(changeInput(changedInput));
    };
};

export default useChange;
