import React from 'react';
import { FetchStatusT } from '../../../../types/typesPayload';
import SvgTurnPageRight from '../../Svg/Actions/SvgTurnPageRight';

export type Props = {
    onClick: () => void;
    maxPage: number;
    activePage: number;
    fetchStatus: FetchStatusT;
};
export default function TurnPageRight(props: Props) {
    const {
        onClick, maxPage, activePage, fetchStatus,
    } = props;
    const disabled = maxPage === activePage || fetchStatus === 'loading';

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
