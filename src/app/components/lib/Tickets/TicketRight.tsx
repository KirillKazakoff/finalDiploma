import React from 'react';
import { TicketRightProps } from '../../../types/typesTicket';

export default function TicketRight({ routes }: TicketRightProps) {
    const { departure, arrival } = routes;

    return (
        <aside className='ticket-aside-right'>
            <ul className='ticket-types'>
                <li className='ticket-type'>
                    <span className='ticket-type-desc'>Сидячий</span>
                    <span className='ticket-amount-left'>88</span>
                    <div className='cost main-cost'>
                        <span className='cost-prefix'>от</span>
                        <div className='cost-count-container main-cost-count-container'>
                            <span className='cost-count main-cost-count'>3 800</span>
                            <span className='cost-money-symbol'>{'{&#8381}'}</span>
                        </div>
                    </div>
                </li>
                <li className='ticket-type'>
                    <span className='ticket-type-desc'>Сидячий</span>
                    <span className='ticket-amount-left'>88</span>
                    <div className='cost main-cost'>
                        <span className='cost-prefix'>от</span>
                        <div className='cost-count-container main-cost-count-container'>
                            <span className='cost-count main-cost-count'>3 800</span>
                            <span className='cost-money-symbol'>{'{&#8381}'}</span>
                        </div>
                    </div>
                </li>
                <li className='ticket-type'>
                    <span className='ticket-type-desc'>Сидячий</span>
                    <span className='ticket-amount-left'>88</span>
                    <div className='cost main-cost'>
                        <span className='cost-prefix'>от</span>
                        <div className='cost-count-container main-cost-count-container'>
                            <span className='cost-count main-cost-count'>3 800</span>
                            <span className='cost-money-symbol'>{'{&#8381}'}</span>
                        </div>
                    </div>
                </li>
                <li className='ticket-type'>
                    <span className='ticket-type-desc'>Сидячий</span>
                    <span className='ticket-amount-left'>88</span>
                    <div className='cost main-cost'>
                        <span className='cost-prefix'>от</span>
                        <div className='cost-count-container main-cost-count-container'>
                            <span className='cost-count main-cost-count'>3 800</span>
                            <span className='cost-money-symbol'>{'{&#8381}'}</span>
                        </div>
                    </div>
                </li>
            </ul>
            <footer className='ticket-footer'>
                <div className='extra-options'>
                    <img
                        className='filter-secondary'
                        src='./svg/features/wireless.svg'
                        alt='wireless'
                    />
                    <img
                        className='filter-secondary'
                        src='./svg/features/rocket.svg'
                        alt='rocket'
                    />
                    <img
                        className='filter-secondary'
                        src='./svg/features/cup.svg'
                        alt='cup'
                    />
                </div>
                <button type='submit' className='btn btn-choose-places'>
                    Выбрать места
                </button>
            </footer>
        </aside>
    );
}
