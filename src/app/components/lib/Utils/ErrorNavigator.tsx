import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks';
import { selectPageStatus, setPageStatus } from '../../../redux/slices/loaderSlice';

const ErrorNavigator = (): any => {
    const navigate = useNavigate();
    const pageStatus = useAppSelector(selectPageStatus);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (pageStatus === 'failed') {
            dispatch(setPageStatus('idle'));
            navigate('/error');
        }
    }, [pageStatus]);

    return null;
};

export default ErrorNavigator;
