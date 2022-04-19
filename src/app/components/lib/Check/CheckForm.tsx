import React from 'react';
import { fetchPostOrder } from '../../../fetch/api/fetchPostOrder';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { setInfo } from '../../../redux/slices/infoSlice';
import BtnNextRoute from '../Common/Form/BtnNextRoute';
import Form from '../Common/Form/Form';
import { messagesError } from '../Common/Info/messagesInfo';

const { checkRoute } = messagesError;
type Props = { errorDesc: string };

export default function CheckForm({ errorDesc }: Props) {
    const dispatch = useAppDispatch();

    const onSubmit = () => {
        if (errorDesc) {
            dispatch(setInfo({ status: 'error', msg: checkRoute(errorDesc) }));
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
