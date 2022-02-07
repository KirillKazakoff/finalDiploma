/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { SearchedCities, OnChangeNewT, InputRefT } from '../../../../types';

type Props = SearchedCities & {
    inputRef: InputRefT;
    onChange: OnChangeNewT;
    isActive: boolean;
};

export default function SearchWayTips(props: Props) {
    const {
        inputRef, onChange, isActive, cities,
    } = props;

    const onClick = (name: string) => () => {
        if (inputRef.current) {
            inputRef.current.value = name;
            onChange(inputRef);
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

    // console.log(cities);
    if (cities.length === 0) return null;
    if (!isActive) return null;
    return <ul className='search-way-tips'>{citiesHtml}</ul>;
}
