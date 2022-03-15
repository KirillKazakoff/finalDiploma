/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

export default function TicketFiltrationSelect() {
    const [isActive, setActive] = useState(false);
    const onClick = () => setActive(!isActive);

    const filters = ['времени', 'стоимости', 'длительности'].map((str) => (
        <span className='filtration-sort-type filtration-sort-type-select'>{str}</span>
    ));

    return (
        <div className='filtration-select'>
            <span
                onClick={onClick}
                className='filtration-sort-type filtration-sort-type-active '
            >
                времени
            </span>
            <div className={`filtration-select-types ${isActive ? '' : 'hidden'}`}>
                {filters}
            </div>
        </div>
    );
}
