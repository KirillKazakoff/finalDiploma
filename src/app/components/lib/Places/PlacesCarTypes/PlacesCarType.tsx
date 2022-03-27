import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/reduxHooks';
import { setCarType } from '../../../../redux/slices/placesSlice';
import { DirTProp } from '../../../../types/typesPlaces';
import { ActiveCarT } from '../../../../types/typesSlices';

import { mapNameToSrc, mapNameToRus, mapDirToRoot } from './mapName';

type Props = { dispatchName: string } & DirTProp;

export default function PlacesCarType({ dispatchName, dir }: Props) {
    const dispatch = useAppDispatch();

    const route = mapDirToRoot(dir);
    const activeCar = useAppSelector((state) => state.places.routes[route].carriageType);
    const onClick = () => {
        dispatch(setCarType({ route, value: dispatchName as ActiveCarT }));
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
