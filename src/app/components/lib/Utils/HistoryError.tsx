import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Error from '../Common/Error/Error';
import ErrorBtn from '../Common/Error/ErrorBtn';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import { setPageStatus, selectPageStatus } from '../../../redux/slices/loaderSlice';

export default function HistoryError() {
    const dispatch = useAppDispatch();
    const pageStatus = useAppSelector(selectPageStatus);

    useEffect(() => {
        dispatch(setPageStatus('idle'));
    }, [pageStatus]);

    const navigate = useNavigate();
    const onClick = () => navigate('/');

    return (
        <Error
            title='What are you doing bruh...'
            desc='Вы пытаетесь вернуться назад в истории... Но ничего уже не вернуть ... Идите вперед! Или вернитесь на главную страницу!'
        >
            <ErrorBtn onClick={onClick} desc='На главную' />
        </Error>
    );
}
