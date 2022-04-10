import { setAlertActive, setStatus } from '../../../../redux/slices/alertSlice';
import { AppThunk } from '../../../../redux/store';

type AlertThunkT = (onAccept: () => void) => AppThunk;

export const alertThunk: AlertThunkT = (onAccept) => async (dispatch, getState) => {
    const { status } = getState().alert;
    if (status === 'accepted') {
        onAccept();
    }
    if (status !== 'idle') {
        dispatch(setAlertActive(false));
        dispatch(setStatus('idle'));
    }
};
