import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks';
import { selectPageStatus, setPageStatus } from '../../redux/slices/loaderSlice';
import ErrorBtn from '../lib/Common/Error/ErrorBtn';
import Error from '../lib/Common/Error/Error';

export default function HistoryError() {
    const dispatch = useAppDispatch();
    const pageStatus = useAppSelector(selectPageStatus);

    useEffect(() => {
        dispatch(setPageStatus('idle'));
    }, [pageStatus, dispatch]);

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
