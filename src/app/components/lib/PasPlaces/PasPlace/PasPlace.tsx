import React from 'react';
import FormSelect from '../../Common/FormSelect';
import PasPlaceExtras from './PasPlaceExtras';
import PasPlaceHeader from './PasPlaceHeader';
import PasPlaceInfo from './PasPlaceInfo';
import PasPlaceSelect from './PasPlaceSelect';

export default function PasPlace() {
    return (
        <li className='pas-plases-dir-item'>
            <PasPlaceHeader />
            <PasPlaceInfo />
            <PasPlaceExtras />
            <PasPlaceSelect />
        </li>
    );
}
