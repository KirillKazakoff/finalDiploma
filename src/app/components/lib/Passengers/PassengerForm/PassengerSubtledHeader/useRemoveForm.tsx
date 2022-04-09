import { useAppDispatch, useAppSelector } from '../../../../../redux/reduxHooks';
import { removeForm, setInput } from '../../../../../redux/slices/passengersSlice';
import { setThunk } from '../../../Common/Info/alertThunk';
import { messagesAlert } from '../../../Common/Info/messagesInfo';

export const useRemoveForm = (id: string) => {
    const dispatch = useAppDispatch();
    const name = 'include_children_seat';
    const forms = useAppSelector((state) => state.passengers);

    const checkChild = () => Object.keys(forms).some((keyId) => {
        const possibleChildId = `${id}childform`;
        return possibleChildId === keyId;
    });

    const onRemoveForm = () => {
        const { statusValidity } = forms[id];

        if (id.includes('childform')) {
            const parentId = id.replace(/childform/, '');
            const dispatchObj = {
                id: parentId,
                name,
                value: 'false',
            };
            dispatch(setInput(dispatchObj));
        }

        if (checkChild()) {
            dispatch(removeForm(`${id}childform`));
        }
    };

    return onRemoveForm;
};
