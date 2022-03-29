/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { CarContentHeaderProps } from '../../../../types/typesPlaces';
import { formatCarCount } from '../../Common/utils/format';

export default function CarContentHeader(props: CarContentHeaderProps) {
    const { numbers, onClick, active } = props;
    const carCounts = numbers.map((number) => {
        let cls = 'carriages-numeration-count';
        if (number === active) cls = `${cls} ${cls}-active`;

        return (
            <li
                className={cls} onClick={onClick(number)}
                key={number}
            >
                {formatCarCount(number)}
            </li>
        );
    });

    return (
        <header className='carriages-header framed-places'>
            <div className='carriages-numeration'>
                <span className='carriages-numeration-title'>Вагоны</span>
                <ul className='carriages-numeration-counts'>{carCounts}</ul>
            </div>
            <span className='carriages-header-desc'>
                Нумерация вагонов начинается с головы поезда
            </span>
        </header>
    );
}
