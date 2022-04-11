import React from 'react';
import { DirTProp } from '../../../types/typesPlaces';
import PasPlace from './PasPlace/PasPlace';
import PasPlaceDirAddBtn from './PasPlaceDirAddBtn';
import PasPlaceDirHeader from './PasPlaceDirHeader';

export default function PasPlaceDir({ dir }: DirTProp) {
    return (
        <div className='pas-places-dir pas-places-dir-from'>
            <PasPlaceDirHeader dir={dir} />

            <div className='pas-places-dir-content'>
                <ul className='pas-places-dir-list'>
                    <PasPlace />
                    <PasPlace />
                </ul>
                <PasPlaceDirAddBtn dir={dir} />
            </div>
        </div>
    );
}
