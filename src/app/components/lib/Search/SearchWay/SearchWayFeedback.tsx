import React from 'react';
import { WayStateT } from '../../../../redux/slices/searchWaySlice';
import InputLoader from '../../Common/inputLoader';
import Feedback from '../../Common/Feedback';

type SearchWayProps = {
    wayState: WayStateT;
    input: HTMLInputElement | null;
};

export default function SearchWayFeedback({ wayState, input }: SearchWayProps) {
    const {
        wasFocused, cities, status, error,
    } = wayState;

    if (!input) return null;

    // if (cities.some((city) => city.name === input.value.trim())) {
    //     return null;
    // }
    if (status === 'loading' && !error) {
        return <InputLoader />;
    }

    return (
        <Feedback
            type='error' error={error}
            wasFocused={wasFocused}
        />
    );
}
