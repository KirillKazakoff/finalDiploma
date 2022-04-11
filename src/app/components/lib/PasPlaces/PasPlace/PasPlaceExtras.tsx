import React from 'react';
import { ExtrasPricesCarT } from '../../../../types/models/modelTickets';

type Props = { extras: ExtrasPricesCarT; placeType: string };

export default function PasPlaceExtras({ extras, placeType }: Props) {
    return (
        <ul className='pas-places-item-extras'>
            <li className='pas-places-item-extra pas-places-item-extra-service'>
                <span className='pas-places-item-extra-desc'>Обслуживание:</span>
                <span className='pas-places-item-extra-value'>ФПК</span>
            </li>
            <li className='pas-places-item-extra pas-places-item-extra-placetype'>
                <span className='pas-places-item-extra-desc'>Тип:</span>
                <span className='pas-places-item-extra-value'>{placeType}</span>
            </li>
            <li className='pas-places-item-extra pas-places-item-extra-extraservices'>
                <span className='pas-places-item-extra-desc'>Доп.услуги:</span>
                <span className='pas-places-item-extra-value'>Wi-Fi, сменное белье</span>
            </li>
        </ul>
    );
}
