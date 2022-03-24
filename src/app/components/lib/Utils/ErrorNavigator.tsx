import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectPageStatus } from '../../../redux/slices/loaderSlice';

const ErrorNavigator = (): any => {
    const navigate = useNavigate();
    const pageStatus = useAppSelector(selectPageStatus);

    useEffect(() => {
        if (pageStatus === 'failed') navigate('/error');
    }, [pageStatus]);

    return null;
};

export default ErrorNavigator;
