import React from 'react';
import { WayStateT } from '../../../../redux/slices/searchWaySlice';
import SpinLoader from '../../Common/SpinLoader';
import Feedback from '../../Common/Feedback';

type SearchWayProps = {
    wayState: WayStateT;
};

export default function SearchWayFeedback({ wayState }: SearchWayProps) {
    const {
        wasFocused, status, error, formError,
    } = wayState;

    if (status === 'loading' && !error) {
        return <SpinLoader />;
    }

    return (
        <Feedback
            error={error} formError={formError}
            wasFocused={wasFocused}
        />
    );
}
