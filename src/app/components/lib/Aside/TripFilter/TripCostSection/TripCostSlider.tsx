import React from 'react';
import CostSlider from './CostSlider';
import { useAppSelector } from '../../../../../redux/reduxHooks';
import { selectFetchStatus } from '../../../../../redux/slices/ticketsSlice';
import PageLoader from '../../../Common/PageLoader/PageLoader';

export default function TripCostSection() {
    const ticketsStatus = useAppSelector(selectFetchStatus);
    if (ticketsStatus !== 'loaded') {
        return (
            <div className='trip-section trip-section-cost'>
                <PageLoader cls='page-loader-cost' desc='Идет поиск' />
            </div>
        );
    }

    return (
        <div className='trip-section trip-section-cost'>
            <h2 className='row-title row-title-small cost-title'>Стоимость</h2>
            <CostSlider />
        </div>
    );
}
