import { setAlertActive, setMsg, setStatus } from '../../../../redux/slices/alertSlice';
import { AppThunk } from '../../../../redux/store';
import { InfoMsgT } from './messagesInfo';

type AlertThunkT = (msg: InfoMsgT, onAccept: () => void) => AppThunk;

export const setThunk: AlertThunkT = (msg, onAccept) => async (dispatch, getState) => {
    dispatch(setAlertActive(true));
    dispatch(setMsg(msg));

    const { status } = getState().alert;
    if (status === 'accepted') {
        onAccept();
    }
    if (status !== 'idle') {
        dispatch(setAlertActive(false));
        dispatch(setStatus('idle'));
    }
    // const alertPromise = new Promise((resolve) => {

    // });
};
