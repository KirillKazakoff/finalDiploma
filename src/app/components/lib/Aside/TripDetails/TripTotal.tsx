import React from 'react';

export default function TripTotal() {
    return (
        <section className='trip-section trip-section-subtle'>
            <div className='subtle-container total-subtle-container'>
                <h2 className='total-passengers'>Итог</h2>
                <div className='total-cost-count-container'>
                    <span className='total-cost-count'>7 760</span>
                    <span className='total-cost-money-symbol'>Р</span>
                </div>
            </div>
        </section>
    );
}
