import React from 'react';
import CostSlider from './CostSlider';
import { useAppSelector } from '../../../../../redux/reduxHooks';
import { selectFetchStatus } from '../../../../../redux/slices/ticketsSlice';

export default function TripCostSection() {
    const ticketsStatus = useAppSelector(selectFetchStatus);
    return (
        <div className='trip-section trip-section-cost'>
            <h2 className='row-title row-title-small cost-title'>Стоимость</h2>
            {ticketsStatus !== 'loading' ? <CostSlider /> : 'Идет загрузка'}
        </div>
    );
}
