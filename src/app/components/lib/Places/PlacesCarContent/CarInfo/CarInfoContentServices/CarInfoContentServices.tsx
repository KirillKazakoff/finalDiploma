/* eslint-disable no-multiple-empty-lines */
import React from 'react';
import { CoachFeaturesT } from '../../../../../../types/models/modelSeats';
import Service from './Service';
import ExtraConditioner from './ExtraConditioner';
import ExtraWiFi from './ExtraWiFi';
import ExtraLinens from './ExtraLinens';

type Props = { coach: CoachFeaturesT; route: string };
export default function CarInfoContentServices({ coach, route }: Props) {
    const {
        wifi_price, linens_price, is_linens_included, have_air_conditioning,
    } = coach;

    const wifiExtra = {
        name: 'wifi_price',
        isIncluded: false,
        price: wifi_price,
    };
    const conditionerExtra = {
        name: 'conditioner',
        isIncluded: true,
        price: 0,
    };
    const linensExtra = {
        name: 'linens_price',
        isIncluded: is_linens_included,
        price: linens_price,
    };

    return (
        <div className='carriage-info-services'>
            <header className='carriage-info-content-header carriage-info-service-header'>
                <span className='carriage-info-service-desc'>Обслуживание</span>
                <span className='carriage-info-service-company'>ФПК</span>
            </header>
            <ul className='carriage-info-content-ul carriage-info-services-list'>
                <Service service={wifiExtra} route={route}>
                    <ExtraWiFi />
                </Service>
                <Service service={linensExtra} route={route}>
                    <ExtraLinens />
                </Service>
                {have_air_conditioning ? (
                    <Service route={route} service={conditionerExtra}>
                        <ExtraConditioner />
                    </Service>
                ) : null}
            </ul>
        </div>
    );
}
