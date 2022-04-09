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
                <img
                    src='./svg/actions/plus.svg'
                    alt='plus'
                    width='100%'
                    height='100%'
                    className='passenger-add'
                />
            </button>
        </header>
    );
}
