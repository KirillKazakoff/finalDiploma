import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectPageStatus } from '../../../redux/slices/loaderSlice';
import { selectActiveTicket } from '../../../redux/slices/placesSlice';

const ErrorNavigator = (): any => {
    const navigate = useNavigate();
    const pageStatus = useAppSelector(selectPageStatus);

    const ticket = useAppSelector(selectActiveTicket);

    useEffect(() => {
        if (pageStatus === 'failed') navigate('/error');
    }, [pageStatus]);

    return null;
};

export default ErrorNavigator;
