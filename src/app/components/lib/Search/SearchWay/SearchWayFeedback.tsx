import React from 'react';
import { WayStateT } from '../../../../redux/slices/searchWaySlice';
import InputLoader from '../../Common/inputLoader';
import Feedback from '../../Common/Feedback';

type SearchWayProps = {
    wayState: WayStateT;
};

export default function SearchWayFeedback({ wayState }: SearchWayProps) {
    const {
        wasFocused, status, error, formError,
    } = wayState;

    if (status === 'loading' && !error) {
        return <InputLoader />;
    }

    return (
        <Feedback
            error={error} formError={formError}
            wasFocused={wasFocused}
        />
    );
}
