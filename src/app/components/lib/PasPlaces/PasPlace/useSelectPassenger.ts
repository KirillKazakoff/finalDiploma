import { useAppDispatch } from '../../../../redux/reduxHooks';
import { PasPlaceT, pushPasPlace } from '../../../../redux/slices/pasPlacesSlice';
import { PersonT } from '../../../../types/models/modelPerson';
import { PlaceT } from '../../../../types/typesSlices';

export const useSelectPassenger = (route: string, price: number, place: PlaceT) => {
    const dispatch = useAppDispatch();

    const onSelect = (person: PersonT) => () => {
        const pasPlace: PasPlaceT = {
            price,
            person_info: person,
            seat_number: place.seat_number,
            coach_id: place.coach_id,
            placeId: place.id,
        };
        dispatch(pushPasPlace({ name: route, value: pasPlace }));
        // dispatch(refresherAhh());
    };

    return onSelect;
};
