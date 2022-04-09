import React from 'react';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectAlert } from '../../../redux/slices/alertSlice';
import { selectInfo } from '../../../redux/slices/infoSlice';
import Alert from '../Common/Info/Alert';
import InfoError from '../Common/Info/InfoError';
import InfoNote from '../Common/Info/InfoNote';

export default function Information() {
    const { isActive, status, msg } = useAppSelector(selectInfo);

    const { isActive: isAlertActive } = useAppSelector(selectAlert);

    if (isActive) {
        if (status === 'note') return <InfoNote msg={msg} />;
        return <InfoError msg={msg} />;
    }
    if (isAlertActive) return <Alert />;

    return null;
}
