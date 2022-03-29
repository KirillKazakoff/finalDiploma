import React from 'react';

export default function CarInfoContentHeader() {
    return (
        <div className='carriage-info-content-header'>
            <div className='carriage-info-content-header-td carriage-places-amount-td'>
                <span className='carriage-info-places-desc'>Места</span>
                <span className='carriage-info-places-count'>11</span>
            </div>
            <div className='carriage-info-content-header-td carriage-places-cost-td'>
                <span className='carriage-info-cost-desc'>Стоимость</span>
            </div>
        </div>
    );
}
