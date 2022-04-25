import { useAppDispatch } from '../../../../redux/reduxHooks';
import { UseChangeT } from '../../../../types/typesForms';

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
