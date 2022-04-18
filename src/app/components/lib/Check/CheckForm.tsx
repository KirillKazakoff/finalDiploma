import React from 'react';
import { fetchPostOrder } from '../../../fetch/api/fetchPostOrder';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import { setInfo } from '../../../redux/slices/infoSlice';
import { selectPasPlaces } from '../../../redux/slices/pasPlacesSlice';
import BtnNextRoute from '../Common/Form/BtnNextRoute';
import Form from '../Common/Form/Form';
import { messagesError } from '../Common/Info/messagesInfo';

export default function CheckForm() {
    const dispatch = useAppDispatch();
    const pasPlaces = useAppSelector(selectPasPlaces);

    const onSubmit = () => {
        if (pasPlaces.departure.length === 0) {
            dispatch(setInfo({ status: 'error', msg: messagesError.checkEmptyRoute }));
            return;
        }
        dispatch(fetchPostOrder());
    };

    return (
        <Form onSubmitForm={onSubmit}>
            <BtnNextRoute>Подтвердить</BtnNextRoute>
        </Form>
    );
}
