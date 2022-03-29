import React from 'react';

type Props = { total: number };
export default function CarInfoContentHeader({ total }: Props) {
    return (
        <div className='carriage-info-content-header'>
            <div className='carriage-info-content-header-td carriage-places-amount-td'>
                <span className='carriage-info-places-desc'>Места</span>
                <span className='carriage-info-places-count'>{total}</span>
            </div>
            <div className='carriage-info-content-header-td carriage-places-cost-td'>
                <span className='carriage-info-cost-desc'>Стоимость</span>
            </div>
        </div>
    );
}
