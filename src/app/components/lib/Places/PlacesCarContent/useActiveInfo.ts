import { useAppSelector } from '../../../../redux/reduxHooks';
import { RootState } from '../../../../redux/store';
import { mapDirToRoot } from '../PlacesCarTypes/mapName';

export const handlerActiveCoaches = (name: string) => (state: RootState) => {
    const { carriageType } = state.places.routes[name];
    const { activeTicket } = state.places;

    const trainInfo = activeTicket.trainsInfo.find((info) => {
        return info.routeName === name;
    });

    return carriageType;
    // return trainInfo.trainInfo.seatsTrainInfo.filter((coach) => {
    //     return coach.coach.class_type === carriageType;
    // });
};

const useActiveInfo = (dir: string) => {
    const routeName = mapDirToRoot(dir);
    const selectActiveCoaches = handlerActiveCoaches(routeName);
    const coaches = useAppSelector(selectActiveCoaches);

    return coaches;
};

export default useActiveInfo;
