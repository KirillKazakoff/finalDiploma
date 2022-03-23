import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectPageStatus } from '../../../redux/slices/loaderSlice';

const ErrorNavigator = (): any => {
    const navigate = useNavigate();
    const pageStatus = useAppSelector(selectPageStatus);

    if (pageStatus === 'failed') navigate('/error');
    return null;
};

export default ErrorNavigator;
