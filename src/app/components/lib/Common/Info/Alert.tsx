import React from 'react';
import SvgInfo from '../../Svg/Actions/SvgInfo';
import { useAppDispatch, useAppSelector } from '../../../../redux/reduxHooks';
import { setStatus, selectAlert } from '../../../../redux/slices/alertSlice';

export default function Alert() {
    const dispatch = useAppDispatch();
    const { msg } = useAppSelector(selectAlert);
    const { title, desc } = msg;
    const onAccept = () => dispatch(setStatus('accepted'));
    const onCancel = () => dispatch(setStatus('canceled'));

    return (
        <div className='info'>
            <header className='info-header info-header-note'>
                <SvgInfo />
            </header>
            <div className='info-content'>
                <span className='info-content-desc info-content-title info-content-title-note'>
                    {title}
                </span>
                <span className='info-content-desc'>{desc}</span>
            </div>
            <footer className='info-footer'>
                <button
                    className='btn btn-info' type='button'
                    onClick={onAccept}
                >
                    Да
                </button>
                <button
                    className='btn btn-info' type='button'
                    onClick={onCancel}
                >
                    Нет
                </button>
            </footer>
        </div>
    );
}
