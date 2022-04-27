import React from 'react';
import { ExtrasPricesCarT } from '../../../../types/models/modelTickets';
import { mapExtra, mapPlaceValue } from './mapExtras';
import { mapNameToRus } from '../../Places/PlacesCarTypes/mapName';

type Props = { extras: ExtrasPricesCarT; placeType: string; carType: string };

export default function PasPlaceExtras({ extras, placeType, carType }: Props) {
    const carTypeDesc = mapNameToRus(carType);

    const extrasArr = Object.entries(extras).reduce<string[]>((total, [key, value]) => {
        let option = mapExtra(key);

        if (!value) return total;
        option = value === 'isIncluded' ? `${option}(опц)` : option;
        total.push(option);

        return total;
    }, []);

    const extrasStr = extrasArr.join(', ');

    return (
        <ul className='pas-places-item-extras'>
            <li className='pas-places-item-extra pas-places-item-extra-service'>
                <span className='pas-places-item-extra-desc'>Обслуживание:</span>
                <span className='pas-places-item-extra-value'>ФПК</span>
            </li>
            <li className='pas-places-item-extra pas-places-item-extra-placetype'>
                <span className='pas-places-item-extra-desc'>Тип:</span>
                <span className='pas-places-item-extra-value'>
                    {`${mapPlaceValue(placeType)} (${carTypeDesc})`}
                </span>
            </li>
            <li className='pas-places-item-extra pas-places-item-extra-extraservices'>
                <span className='pas-places-item-extra-desc'>Доп.услуги:</span>
                <span className='pas-places-item-extra-value'>{extrasStr}</span>
            </li>
        </ul>
    );
}
