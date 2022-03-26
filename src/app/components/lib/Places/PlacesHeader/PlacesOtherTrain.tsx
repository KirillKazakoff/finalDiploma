import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = { dir: string };

export default function PlacesOtherTrain({ dir }: Props) {
    return (
        <div className={`places-choose places-choose-${dir} framed-places`}>
            <img
                className='ic-subtle-arrow-lg'
                src={`./svg/arrows/arrow-subtle-time-${dir}.svg`}
                alt='arrow'
            />
            <NavLink to='/tickets' style={{ display: 'flex' }}>
                <button className='btn btn-choose-another-train' type='button'>
                    Выбрать другой поезд
                </button>
            </NavLink>
        </div>
    );
}
