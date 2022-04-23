import React from 'react';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectInfo } from '../../../redux/slices/infoSlice';
import InfoError from '../Common/Info/InfoError';
import InfoNote from '../Common/Info/InfoNote';

export default function Information() {
    const { isActive, status, msg } = useAppSelector(selectInfo);

    if (isActive) {
        if (status === 'note') return <InfoNote msg={msg} />;
        return <InfoError msg={msg} />;
    }

    return null;
}
