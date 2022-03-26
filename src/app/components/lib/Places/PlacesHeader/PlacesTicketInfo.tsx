import React from 'react';
import { DirProp } from '../../../../types/typesPlaces';
import PlacesTicketInfoDir from './PlacesTicketInfoDir';
import SvgPlacesArrow from '../../Svg/Arrows/SvgPlacesArrow';
import SvgTrain from '../../Svg/SvgTrain';
import SvgTime from '../../Svg/SvgTime';
import { getDurationLong } from '../../Tickets/Ticket/getTrainTime';

export default function PlacesTicketInfo({ dir, route }: DirProp) {
    const {
        from, to, duration, train,
    } = route;

    return (
        <div className='places-ticket-info framed-places'>
            <div className='places-ticket-info-part places-ticket-info-part-train'>
                <div className='train-wrapper train-wrapper-sm'>
                    <SvgTrain className='filter-main' height={20} />
                </div>
                <div className='train-info'>
                    <div className='train-number train-number-places'>{train.name}</div>
                    <ul className='train-stations'>
                        <li className='train-station train-station-next'>
                            <span className='fl train-station-desc'>
                                {from.city.name}
                            </span>
                            <img src='./svg/arrows/arrow-station.svg' alt='arrow' />
                        </li>
                        <li className='train-station train-station-next'>
                            <span className='fl train-station-desc'>{to.city.name}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='places-ticket-info-part places-ticket-info-part-direction'>
                <div className='ticket-direction places-ticket-direction'>
                    <PlacesTicketInfoDir station={dir === 'to' ? from : to} />
                    <SvgPlacesArrow dir={dir} />
                    <PlacesTicketInfoDir station={dir === 'to' ? to : from} />
                </div>
            </div>
            <div className='places-ticket-info-part places-ticket-info-part-time'>
                <div className='places-travel-time'>
                    <SvgTime className='filter-main' />
                    <span className='places-travel-time-desc'>
                        {getDurationLong(duration)}
                    </span>
                </div>
            </div>
        </div>
    );
}
