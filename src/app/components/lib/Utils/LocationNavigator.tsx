import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks';
import { selectLocations, pushLocation } from '../../../redux/slices/locationsSlice';

const LocationNavigator = (): any => {
    const dispatch = useAppDispatch();
    const activeLocation = useLocation();
    const locations = useAppSelector(selectLocations);

    useEffect(() => {
        const foundLoc = locations.find((location) => {
            return activeLocation.key === location.key;
        });

        if (!foundLoc) {
            const locObj = {
                key: activeLocation.key,
                wasOrderSucceded: false,
            };

            dispatch(pushLocation(locObj));
        }
    }, [activeLocation, locations, dispatch]);

    return null;
};

export default LocationNavigator;
