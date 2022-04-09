import React from 'react';

type Props = { onClick: () => void; isActive: boolean };

export default function SubtlePassengerFormBtn({ onClick, isActive }: Props) {
    const signCls = isActive ? 'minus' : 'plus';
    return (
        <button
            className={`passenger-collapse passenger-collapse-${signCls}`}
            type='button'
            onClick={onClick}
        >
            {isActive ? (
                <img src='./svg/actions/minus.svg' alt='collapse-minus' />
            ) : (
                <img src='./svg/actions/plus.svg' alt='collapse-plus' />
            )}
        </button>
    );
}
