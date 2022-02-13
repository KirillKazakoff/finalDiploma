import { UseChangeT } from './typesForms';
import { useAppDispatch } from '../redux/reduxHooks';

const useChange: UseChangeT = (changeInput) => {
    const dispatch = useAppDispatch();

    return (input) => {
        const changedInput = {
            name: input.name,
            value: input.value,
        };

        dispatch(changeInput(changedInput));
    };
};

export default useChange;
