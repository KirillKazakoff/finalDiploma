import React, { useState } from 'react';
import { SortTypeT } from '../../../../types/typesSlices';
import TicketFiltrationSelectActive from './TicketFiltrationSelectActive';
import TicketFiltrationSelectType from './TicketFiltrationSelectType';

export default function TicketFiltrationSort() {
    const [isActive, setActive] = useState(false);
    const onClick = () => setActive(!isActive);

    const filtersId: SortTypeT[] = ['date', 'price', 'duration'];
    const filters = filtersId.map((id) => (
        <TicketFiltrationSelectType
            setActiveHandler={onClick} id={id}
            key={id}
        />
    ));

    return (
        <div className='filtration-sort'>
            <span className='filtration-sort-desc'>сортировать по:</span>
            <div className='filtration-select'>
                <TicketFiltrationSelectActive setActiveHandler={onClick} />
                <div className={`filtration-select-types ${isActive ? '' : 'hidden'}`}>
                    {filters}
                </div>
            </div>
        </div>
    );
}
