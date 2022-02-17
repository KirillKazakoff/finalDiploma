/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
import React from 'react';

import { useAppDispatch } from '../../../../redux/reduxHooks';
import { setInput, setCities } from '../../../../redux/slices/searchWaySlice';
import { InputRefT } from '../../../../types/typesForms';
import { SearchedCities } from '../../../../types/typesSearch';

type Props = SearchedCities & {
    inputRef: InputRefT;
    isActive: boolean;
};

export default function SearchWayTips(props: Props) {
    const { inputRef, isActive, cities } = props;
    const input = inputRef.current;
    const dispatch = useAppDispatch();

    const onClick = (name: string) => () => {
        if (!input) return;

        input.value = name;
        const selectedCity = cities.find((city) => city.name === name);
        if (!selectedCity) return;

        dispatch(setCities({ inputName: input.name, cities: [selectedCity] }));
        dispatch(setInput({ name: input.name, value: input.value }));
    };

    const citiesHtml = cities.map((city) => (
        <li
            key={city._id} className='search-way-tip'
            onClick={onClick(city.name)}
        >
            {city.name}
        </li>
    ));

    if (cities.length === 0 || !isActive) return null;
    return (
        <ul className='search-way-tips' onBlur={() => console.log('blured')}>
            {citiesHtml}
        </ul>
    );
}
