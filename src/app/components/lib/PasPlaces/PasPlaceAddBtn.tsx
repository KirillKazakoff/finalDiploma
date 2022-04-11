import React from 'react';

export default function PasPlaceAddBtn() {
    return (
        <div className='pas-places-add-passenger'>
            <img
                src='./svg/arrows/arrow-subtle-rect-to.svg'
                alt='arrow-subtle'
                className='pas-places-add-icon'
            />
            <button className='btn btn-pas-places-add-passenger' type='button'>
                Добавить пассажиров
            </button>
        </div>
    );
}
