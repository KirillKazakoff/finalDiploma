import React, { useEffect } from 'react';
import { WayStateT } from '../../../../redux/slices/searchWaySlice';
import validateCity from './validateCity';
import InputLoader from '../../Common/inputLoader';
import ValidatedFeedback from '../../Common/ValidatedFeedback';
import { useAppDispatch } from '../../../../redux/reduxHooks';
import { setFormMsg, setFormStatus } from '../../../../redux/slices/searchFormSlice';

type SearchWayProps = {
    wayState: WayStateT;
    input: HTMLInputElement | null;
};

export default function SearchWayFeedback({ wayState, input }: SearchWayProps) {
    const dispatch = useAppDispatch();
    const { wasFocused, cities, status } = wayState;

    if (!input) return null;
    const cityCheck = cities[0]?.name;
    validateCity(input, cityCheck, status);

    if (cities.some((city) => city.name === input.value)) {
        return null;
    }
    if (status === 'loading') {
        return <InputLoader />;
    }
    if (!wasFocused) return null;

    return <ValidatedFeedback input={input} />;
}
