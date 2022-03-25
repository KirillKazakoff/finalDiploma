import React from 'react';

type Props = { dir: string };

export default function PlacesOtherTrain({ dir }: Props) {
    return (
        <div className={`places-choose places-choose-${dir} framed-places`}>
            <img
                className='ic-subtle-arrow-lg'
                src={`./svg/arrows/arrow-subtle-time-${dir}.svg`}
                alt='arrow'
            />
            <button className='btn btn-choose-another-train' type='button'>
                Выбрать другой поезд
            </button>
        </div>
    );
}
