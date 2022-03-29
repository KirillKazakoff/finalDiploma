import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/reduxHooks';
import { mapDirToRoot } from '../PlacesCarTypes/mapName';
import { selectActiveTicket, setActiveCar } from '../../../../redux/slices/placesSlice';

export const useActiveInfo = (dir: string) => {
    const dispatch = useAppDispatch();

    const name = mapDirToRoot(dir);
    const carType = useAppSelector((state) => state.places.routes[name].carriageType);
    const ticket = useAppSelector(selectActiveTicket);

    const infoT = ticket.trainsInfo.find((info) => {
        return info.routeName === name;
    });

    const cars = infoT.trainInfo.seatsTrainInfo.filter((coach) => {
        return coach.coach.class_type === carType;
    });

    useEffect(() => {
        dispatch(setActiveCar({ route: name, value: cars[0] }));
    }, [carType]);
    return { cars, carType };
};
