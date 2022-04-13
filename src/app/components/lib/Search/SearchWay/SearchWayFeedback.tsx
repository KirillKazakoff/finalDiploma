import React from 'react';
import SpinLoader from '../../Common/SpinLoader';
import Feedback from '../../Common/Feedback/Feedback';
import { WayStateT } from '../../../../types/typesSlices';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectMsgStatus } from '../../../../redux/slices/searchFormSlice';

type SearchWayProps = {
    wayState: WayStateT;
};

export default function SearchWayFeedback({ wayState }: SearchWayProps) {
    const isFormHidden = useAppSelector(selectMsgStatus);
    const {
        wasFocused, status, error, formError,
    } = wayState;

    if (status === 'loading' && !error) {
        return <SpinLoader />;
    }

    return (
        <Feedback
            error={error}
            formError={formError}
            wasFocused={wasFocused}
            isFormMsgHidden={isFormHidden}
        />
    );
}
