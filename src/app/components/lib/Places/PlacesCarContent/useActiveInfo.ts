import { useAppSelector } from '../../../../redux/reduxHooks';
import { mapDirToRoot } from '../PlacesCarTypes/mapName';
import { selectActiveTicket } from '../../../../redux/slices/placesSlice';

export const useActiveInfo = (dir: string) => {
    const name = mapDirToRoot(dir);
    const carType = useAppSelector((state) => state.places.routes[name].carriageType);
    const ticket = useAppSelector(selectActiveTicket);

    const infoT = ticket.trainsInfo.find((info) => {
        return info.routeName === name;
    });

    const cars = infoT.trainInfo.seatsTrainInfo.filter((coach) => {
        return coach.coach.class_type === carType;
    });

    return { cars, carType };
};
