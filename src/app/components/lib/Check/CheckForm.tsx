import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPostOrder } from '../../../fetch/api/fetchPostOrder';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { setInfo } from '../../../redux/slices/infoSlice';
import BtnNextRoute from '../Common/Form/BtnNextRoute';
import Form from '../Common/Form/Form';
import { messagesError } from '../Common/Info/messagesInfo';
import { useRefreshRoutes } from './useRefreshRoutes';

const { checkRoute } = messagesError;
type Props = { errorDesc: string };

export default function CheckForm({ errorDesc }: Props) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const refreshRoutes = useRefreshRoutes();

    const onSubmit = async () => {
        if (errorDesc) {
            dispatch(setInfo({ status: 'error', msg: checkRoute(errorDesc) }));
            return;
        }

        const res = await dispatch(fetchPostOrder());
        if (res) {
            navigate('/success');
            refreshRoutes();
        }
    };

    return (
        <Form onSubmitForm={onSubmit}>
            <BtnNextRoute>Подтвердить</BtnNextRoute>
        </Form>
    );
}
