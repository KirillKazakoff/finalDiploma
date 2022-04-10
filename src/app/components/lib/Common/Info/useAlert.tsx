import { useEffect } from 'react';
import {
    selectAlert,
    setAlertActive,
    setStatus,
} from '../../../../redux/slices/alertSlice';
import { InfoMsgT } from './messagesInfo';
import { useAppDispatch, useAppSelector } from '../../../../redux/reduxHooks';
import { alertThunk } from './alertThunk';

type AlertThunkT = (msg: InfoMsgT, onAccept: () => void) => () => void;

export const useAlert: AlertThunkT = (msg, onAccept) => {
    const dispatch = useAppDispatch();
    const { status, isActive } = useAppSelector(selectAlert);

    // const alert = () => {
    //     if (status === 'accepted') {
    //         onAccept();
    //     }
    //     if (status !== 'idle') {
    //         dispatch(setAlertActive(false));
    //         dispatch(setStatus('idle'));
    //     }
    // };

    useEffect(() => {
        if (isActive) {
            dispatch(alertThunk(onAccept));
        }
    }, [status, isActive]);

    return alert;
};
