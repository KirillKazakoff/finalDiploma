import React from 'react';
import { FetchStatusT } from '../../../../types/typesPayload';
import SvgTurnPageLeft from '../../Svg/Actions/SvgTurnPageLeft';

type Props = { onClick: () => void; activePage: number; fetchStatus: FetchStatusT };

export default function TurnPageLeft({ onClick, activePage, fetchStatus }: Props) {
    const disabled = activePage === 1 || fetchStatus === 'loading';

    return (
        <button
            className='pagination-container turn-page turn-page-left'
            type='button'
            onClick={onClick}
            disabled={disabled}
        >
            <SvgTurnPageLeft />
        </button>
    );
}
