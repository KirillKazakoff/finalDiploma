import React from 'react';

export default function CarriageFirst() {
    return (
        <div className='carriage-container carriage-container-luxe framed-places'>
            <img
                className='carriage-left'
                src='./img/carriages/carriage-left.png'
                alt='carriage-left'
            />
            <div className='carriage-scheme carriage-scheme-bordered'>
                <div className='carriage-passageway' />
                <div className='carriage-bottom-cross-line' />
                <div className='carriage-section carriage-section-bordered'>
                    <div className='carriage-seats-area'>
                        <ul className='carriage-seats'>
                            <li className='carriage-seat carriage-seat-top-luxe'>1</li>
                        </ul>
                        <ul className='carriage-seats'>
                            <li className='carriage-seat carriage-seat-top-luxe'>2</li>
                        </ul>
                    </div>
                </div>
            </div>
            <img
                className='carriage-right'
                src='./img/carriages/carriage-right.png'
                alt='carriage-right'
            />
        </div>
    );
}
