import React from 'react';
import { SeatFullT } from '../../../../types/models/modelSeats';

type Props = {
    cls: string;
    onClick: (e: React.SyntheticEvent) => void;
    place: SeatFullT;
};

export default function CarSeat(props: Props) {
    const { cls, onClick, place } = props;
    const {
        disabled, available, index, selected,
    } = place;

    let className = cls;
    if (!available) {
        className = `${className} carriage-seat-unavailable`;
    } else if (disabled) {
        className = `${className} carriage-seat-noseatable`;
    }

    if (selected) {
        className = `${className} carriage-seat-active`;
    }

    return (
        <button
            className={className}
            onClick={onClick}
            type='button'
            disabled={!available || disabled}
        >
            {index}
        </button>
    );
}
