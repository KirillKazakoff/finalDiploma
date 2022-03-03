import React from 'react';

export default function TicketType() {
    return (
        <li className='ticket-type framed-ticket-right'>
            <ul className='ticket-type-tips framed-ticket-right'>
                <div className='ticket-type-tips-arrow-decor' />
                <li className='ticket-type-tip'>
                    <span className='ticket-type-desc'>верхние</span>
                    <span className='ticket-amount-left'>19</span>
                    <div className='cost main-cost'>
                        <div className='cost-count-container main-cost-count-container'>
                            <span className='cost-count main-cost-count'>2 920</span>
                            <span className='cost-money-symbol'>₽</span>
                        </div>
                    </div>
                </li>
                <li className='ticket-type-tip'>
                    <span className='ticket-type-desc'>низ</span>
                    <span className='ticket-amount-left'>19</span>
                    <div className='cost main-cost'>
                        <div className='cost-count-container main-cost-count-container'>
                            <span className='cost-count main-cost-count'>2 920</span>
                            <span className='cost-money-symbol'>₽</span>
                        </div>
                    </div>
                </li>
            </ul>

            <span className='ticket-type-desc'>Сидячий</span>
            <span className='ticket-amount-left'>88</span>
            <div className='cost main-cost'>
                <span className='cost-prefix'>от</span>
                <div className='cost-count-container main-cost-count-container'>
                    <span className='cost-count main-cost-count'>3 800</span>
                    <span className='cost-money-symbol'>₽</span>
                </div>
            </div>
        </li>
    );
}
