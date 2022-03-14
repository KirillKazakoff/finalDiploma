import React from 'react';
import CostSlider from './CostSlider';

export default function TripCostSection() {
    return (
        <div className='trip-section trip-section-cost'>
            <h2 className='row-title row-title-small cost-title'>Стоимость</h2>
            <CostSlider />
        </div>
    );
}
