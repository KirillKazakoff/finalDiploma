import { useAppDispatch } from '../../../redux/reduxHooks';
import { SetFormErrorT } from '../../../types';

const useSameCity = (setFormError: SetFormErrorT) => {
    const dispatch = useAppDispatch();

    return (isSame: boolean) => {
        dispatch(setFormError({ name: 'wayFrom', isFormError: isSame }));
        dispatch(setFormError({ name: 'wayTo', isFormError: isSame }));
    };
};

export default useSameCity;
