import React from 'react';

type Props = { onClick: () => void; isActive: boolean };

export default function SubtlePassengerFormBtn({ onClick, isActive }: Props) {
    return isActive ? (
        <button
            className='passenger-collapse passenger-collapse-minus'
            type='button'
            onClick={onClick}
        >
            <img src='./svg/actions/minus.svg' alt='collapse-minus' />
        </button>
    ) : (
        <button
            className='passenger-collapse passenger-collapse-plus'
            onClick={onClick}
            type='button'
        >
            <img src='./svg/actions/plus.svg' alt='collapse-minus' />
        </button>
    );
}
