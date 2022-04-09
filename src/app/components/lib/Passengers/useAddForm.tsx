import { nanoid } from 'nanoid';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import { setInfo } from '../../../redux/slices/infoSlice';
import { addForm, selectFormsLength } from '../../../redux/slices/passengersSlice';
import { selectPlacesLengthArr } from '../../../redux/slices/utils/selectPlacesLength';
import { messagesInfo } from '../Common/Info/messagesInfo';

export const useAddPlacedPassenger = () => {
    const dispatch = useAppDispatch();
    const placesAmount = useAppSelector(selectPlacesLengthArr);
    const formsLength = useAppSelector(selectFormsLength);

    const addFormHandler = () => {
        if (formsLength < placesAmount.length) {
            dispatch(addForm(nanoid()));
            return true;
        }

        dispatch(setInfo({ status: 'note', msg: messagesInfo.placesLimit }));
        return false;
    };

    return addFormHandler;
};
