import { nanoid } from 'nanoid';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import { setInfo } from '../../../redux/slices/infoSlice';
import { addForm, selectFormsLength } from '../../../redux/slices/passengersSlice';
import { selectPlacesLength } from '../../../redux/slices/utils/selectPlacesLength';
import { messagesInfo } from '../Common/Info/messagesInfo';

export const useAddPlacedPassenger = () => {
    const dispatch = useAppDispatch();
    const { biggest } = useAppSelector(selectPlacesLength);
    const formsLength = useAppSelector(selectFormsLength);

    const addFormHandler = () => {
        if (formsLength < biggest) {
            dispatch(addForm(nanoid()));
            return true;
        }

        dispatch(setInfo({ status: 'note', msg: messagesInfo.placesLimit(biggest) }));
        return false;
    };

    return addFormHandler;
};
