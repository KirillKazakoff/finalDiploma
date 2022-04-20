import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks';
import { selectLocations, pushLocation } from '../../../redux/slices/locationsSlice';

const LocationNavigator = (): any => {
    const dispatch = useAppDispatch();
    const activeLocation = useLocation();
    const locations = useAppSelector(selectLocations);
    const navigate = useNavigate();

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
            return;
        }

        if (foundLoc.wasOrderSucceded === true) {
            navigate('/');
        }
    }, [activeLocation, locations]);

    return null;
};

export default LocationNavigator;
