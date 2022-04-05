import { SetFormMsgHiddenT } from '../types/typesPayload';
import { FormStatusT } from '../redux/slices/searchFormSlice';
import { useAppDispatch } from '../redux/reduxHooks';

const useCheckStatus = (
    setFormMsg: SetFormMsgHiddenT,
    status: FormStatusT,
    formId?: string,
) => {
    const dispatch = useAppDispatch();

    const checkStatus = () => {
        if (status === 'error') {
            dispatch(setFormMsg({ isHidden: false, id: formId }));
            return false;
        }
        if (status === 'success') {
            dispatch(setFormMsg({ isHidden: true, id: formId }));
        }

        return true;
    };

    return checkStatus;
};

export default useCheckStatus;
