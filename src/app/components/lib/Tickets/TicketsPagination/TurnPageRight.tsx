import React from 'react';
import SvgTurnPageRight from '../../Svg/Actions/SvgTurnPageRight';

export type Props = { onClick: () => void; maxPage: number; activePage: number };
export default function TurnPageRight({ onClick, maxPage, activePage }: Props) {
    const disabled = maxPage === activePage;
    return (
        <button
            className='turn-page turn-page-right pagination-container'
            type='button'
            onClick={onClick}
            disabled={disabled}
        >
            <SvgTurnPageRight />
        </button>
    );
}
