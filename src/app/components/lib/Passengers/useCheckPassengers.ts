/* eslint-disable no-param-reassign */
import { useAppSelector } from '../../../redux/reduxHooks';
import { FormStatusT } from '../../../redux/slices/utils/reduxFormUtils';
import { selectPlacesLength } from '../../../redux/slices/utils/selectPlacesLength';
import { messagesError } from '../Common/Info/messagesInfo';
import { getAges } from './checkAges';

const {
    childrenOverwhelm, noPassengers, fullfillForm, notEqualPlaces, emptyPrevRoute,
} = messagesError;

export const useCheckPassengers = () => {
    const forms = useAppSelector((state) => state.passengers);
    const { biggest } = useAppSelector(selectPlacesLength);

    const statusValidity = Object.values(forms).reduce<FormStatusT>((status, form) => {
        if (form.statusValidity !== 'success') status = 'error';
        return status;
    }, 'success');

    let msg;
    const { microPeople, adults } = getAges(forms);
    if (microPeople / adults > 3) msg = childrenOverwhelm;

    const total = microPeople + adults;

    if (statusValidity !== 'success') msg = fullfillForm;
    if (biggest !== total) msg = notEqualPlaces(biggest);
    if (total === 0) msg = noPassengers;
    if (biggest === 0) msg = emptyPrevRoute;

    return { msg, statusValidity };
};
