import { useCheckPlaces } from '../Places/useCheckPlaces';
import { useCheckPassengers } from '../Passengers/useCheckPassengers';
import { useCheckPasPlaces } from '../PasPlaces/useCheckPasPlaces';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectFormStatus } from '../../../redux/slices/paymentFormSlice';

export const useCheckRoutes = () => {
    const { msg: passengersValidityStatus } = useCheckPassengers();
    const paymentValidityStatus = useAppSelector(selectFormStatus);

    const passengersIsValid = !passengersValidityStatus;
    const paymentIsValid = paymentValidityStatus === 'success';
    const { isValid: placesIsValid } = useCheckPlaces();
    const { allValid: pasPlacesIsValid } = useCheckPasPlaces();

    const error = {
        to: '',
        desc: '',
        isError: false,
    };

    if (!paymentIsValid) {
        error.to = '/payment';
        error.desc = 'Заполните секцию "Оплата"';
        error.isError = true;
    }

    if (!pasPlacesIsValid) {
        error.to = '/pas-places';
        error.desc = 'Заполните секцию "Пассажиры"';
        error.isError = true;
    }

    if (!passengersIsValid) {
        error.to = '/passengers';
        error.desc = 'Заполните секцию "Пассажиры"';
        error.isError = true;
    }

    if (!placesIsValid) {
        error.to = '/places';
        error.desc = 'Заполните секцию "Билеты"';
        error.isError = true;
    }

    return error;
};
