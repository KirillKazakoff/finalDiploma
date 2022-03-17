import React from 'react';
import SvgTurnPageLeft from '../../Svg/Actions/SvgTurnPageLeft';

type Props = { onClick: () => void; activePage: number };

export default function TurnPageLeft({ onClick, activePage }: Props) {
    const disabled = activePage === 1;
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
