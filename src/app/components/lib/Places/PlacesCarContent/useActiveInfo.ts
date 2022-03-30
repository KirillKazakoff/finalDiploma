import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/reduxHooks';
import { mapDirToRoot } from '../PlacesCarTypes/mapName';
import { selectActiveTicket, setActiveCar } from '../../../../redux/slices/placesSlice';

export const useActiveInfo = (dir: string) => {
    const dispatch = useAppDispatch();

    const route = mapDirToRoot(dir);
    const carType = useAppSelector((state) => state.places.routes[route].carriageType);
    const ticket = useAppSelector(selectActiveTicket);

    const infoT = ticket.trainsInfo.find((info) => {
        return info.routeName === route;
    });

    const cars = infoT.trainInfo.seatsTrainInfo.filter((coach) => {
        return coach.coach.class_type === carType;
    });

    useEffect(() => {
        dispatch(setActiveCar({ route, value: cars[0] }));
    }, [carType]);

    const onClick = (count: number) => () => {
        const newCar = cars.find((car) => car.carNumber === count);
        dispatch(setActiveCar({ route, value: newCar }));
    };

    const numbers = cars.map((car) => car.carNumber);

    return { numbers, onClick };
};
