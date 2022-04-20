import React from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorBtn from '../lib/Common/Error/ErrorBtn';
import Error from '../lib/Common/Error/Error';

export default function ErrorRoute() {
    const navigate = useNavigate();
    const onClick = () => navigate(-1);

    return (
        <Error
            title='404 Error'
            desc='Something went wrong bruh, you should do something'
        >
            <ErrorBtn onClick={onClick} desc='Вернуться назад' />
        </Error>
    );
}
