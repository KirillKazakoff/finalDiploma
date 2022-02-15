import React, { useEffect } from 'react';
import { WayStateT } from '../../../../redux/slices/searchWaySlice';
import InputLoader from '../../Common/inputLoader';
import ValidatedFeedback from '../../Common/ValidatedFeedback';

type SearchWayProps = {
    wayState: WayStateT;
    input: HTMLInputElement | null;
};

export default function SearchWayFeedback({ wayState, input }: SearchWayProps) {
    const { wasFocused, cities, status } = wayState;

    if (!input) return null;

    if (cities.some((city) => city.name === input.value)) {
        return null;
    }
    if (status === 'loading') {
        return <InputLoader />;
    }
    if (!wasFocused) return null;

    return <ValidatedFeedback input={input} />;
}
