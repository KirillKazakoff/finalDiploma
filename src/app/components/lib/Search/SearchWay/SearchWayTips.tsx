/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { SearchedCities, InputRefT } from '../../../../types';
import { useAppDispatch } from '../../../../redux/reduxHooks';
import { changeInput, setCities } from '../../../../redux/slices/searchWaySlice';

type Props = SearchedCities & {
    inputRef: InputRefT;
    isActive: boolean;
};

export default function SearchWayTips(props: Props) {
    const { inputRef, isActive, cities } = props;
    const input = inputRef.current;
    const dispatch = useAppDispatch();

    const onClick = (name: string) => () => {
        if (input) {
            if (input.value === name && cities[0]) {
                dispatch(setCities({ inputName: input.name, cities }));
                return;
            }

            input.value = name;
            dispatch(changeInput({ name: input.name, value: input.value }));
        }
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
    return <ul className='search-way-tips'>{citiesHtml}</ul>;
}
