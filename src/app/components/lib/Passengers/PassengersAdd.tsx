import React from 'react';
import { useAddPlacedPassenger } from './useAddForm';

export default function PassengersAdd() {
    const addForm = useAddPlacedPassenger();
    const onClick = () => addForm();

    return (
        <header className='passenger-header framed-passengers shadowed'>
            <span className='passenger-desc'>Добавить пассажира</span>
            <button
                className='passenger-add' type='button'
                onClick={onClick}
            >
                <img src='./svg/actions/plus.svg' alt='plus' />
            </button>
        </header>
    );
}
