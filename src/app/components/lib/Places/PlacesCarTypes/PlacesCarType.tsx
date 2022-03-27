import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/reduxHooks';
import { ActiveCarT, setCarType } from '../../../../redux/slices/placesSlice';
import { mapNameToSrc, mapNameToRus } from './mapName';

type Props = { dispatchName: string };

export default function PlacesCarType({ dispatchName }: Props) {
    const dispatch = useAppDispatch();
    const activeCar = useAppSelector((state) => state.places.carriageType);
    const onClick = () => {
        dispatch(setCarType(dispatchName as ActiveCarT));
    };

    let className = 'carriage-type';
    className = activeCar === dispatchName
        ? `${className} filter-main`
        : `${className} filter-secondary`;

    const src = mapNameToSrc(dispatchName);
    const typeRus = mapNameToRus(dispatchName);

    return (
        <button
            className={className} onClick={onClick}
            type='button'
        >
            <img
                className='ic-carriage-type'
                src={`./svg/features/${src}.svg`}
                alt={src}
            />
            <span className='carriage-type-title'>{typeRus}</span>
        </button>
    );
}
