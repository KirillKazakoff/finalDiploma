import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectLocations } from '../../../redux/slices/locationsSlice';

export const useCheckLocation = () => {
    const activeLocation = useLocation();
    const locations = useAppSelector(selectLocations);

    const foundLoc = locations.find((location) => {
        return activeLocation.key === location.key;
    });

    let outletRes = true;
    const path = activeLocation.pathname;
    if (foundLoc && foundLoc.wasOrderSucceded && path !== '/') {
        outletRes = false;
    }

    return outletRes;
};
