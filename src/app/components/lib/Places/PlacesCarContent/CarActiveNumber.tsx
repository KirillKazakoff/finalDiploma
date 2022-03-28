import React from 'react';
import { ActiveProp } from '../../../../types/typesPlaces';
import { formatCarCount } from '../../Common/utils/format';

export default function CarActiveNumber({ active }: ActiveProp) {
    return (
        <div className='carriage-info-number framed-places'>
            <div className='carriage-info-number-wrapper'>
                <div className='carriage-info-number-count'>{formatCarCount(active)}</div>
                <div className='carriage-info-number-desc'>вагон</div>
            </div>
        </div>
    );
}
