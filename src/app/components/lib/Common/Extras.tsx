import React from 'react';
import { ExtrasT } from '../../../types/models/modelTickets';
import ExtraFeature from './ExtraFeature';

type ExtrasProps = { filter?: string; extras: ExtrasT };
export default function Extras(props: ExtrasProps) {
    const { extras, filter } = props;
    const { have_air_conditioning, have_wifi, is_express } = extras;

    return (
        <div className='extra-options'>
            <ExtraFeature
                filter={filter} isActive={have_wifi}
                name='wireless'
            />
            <ExtraFeature
                filter={filter} isActive={is_express}
                name='rocket'
            />
            <ExtraFeature
                filter={filter}
                isActive={have_air_conditioning}
                name='conditioner'
            />
        </div>
    );
}

Extras.defaultProps = {
    filter: '',
};
