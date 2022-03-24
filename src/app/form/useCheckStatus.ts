import { SetFormMsgHiddenT } from '../types/typesPayload';
import { FormStatusT } from '../redux/slices/searchFormSlice';
import { useAppDispatch } from '../redux/reduxHooks';

const useCheckStatus = (setFormMsg: SetFormMsgHiddenT, status: FormStatusT) => {
    const dispatch = useAppDispatch();

    const checkStatus = () => {
        if (status === 'error') {
            dispatch(setFormMsg(false));
            return false;
        }
        if (status === 'success') {
            dispatch(setFormMsg(true));
        }

        return true;
    };

    return checkStatus;
};

export default useCheckStatus;
