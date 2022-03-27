import React from 'react';

export default function CarInfoCost() {
    return (
        <div className='carriage-info-content-col carriage-info-cost'>
            <header className='carriage-info-content-header carriage-info-cost-header'>
                <span className='carriage-info-cost-desc'>Стоимость</span>
            </header>
            <ul className='carriage-info-content-ul carriage-info-cost-types'>
                <li className='carriage-info-cost-type'>
                    <span className='carriage-info-cost-count'>2 920</span>
                    <span className='carriage-info-cost-money-symbol'>Р</span>
                </li>
                <li className='carriage-info-cost-type'>
                    <span className='carriage-info-cost-count'>3 530</span>
                    <span className='carriage-info-cost-money-symbol'>Р</span>
                </li>
            </ul>
        </div>
    );
}
