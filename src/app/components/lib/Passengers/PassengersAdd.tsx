import React from 'react';

export default function PassengersAdd() {
    return (
        <header className='passenger-header framed-passengers shadowed'>
            <span className='passenger-desc'>Добавить пассажиров</span>
            <button className='passenger-add' type='button'>
                <img src='./svg/actions/plus.svg' alt='plus' />
            </button>
        </header>
    );
}
