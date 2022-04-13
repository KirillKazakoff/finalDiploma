import React from 'react';
import './info.css';
import { InfoMsgT } from './messagesInfo';
import { useAppDispatch } from '../../../../redux/reduxHooks';
import { setInfoActive } from '../../../../redux/slices/infoSlice';

type Props = { msg: InfoMsgT; icon: React.ReactNode; cls: string };

export default function Info(props: Props) {
    const dispatch = useAppDispatch();
    const { msg, icon, cls } = props;
    const { title, desc } = msg;

    const onClick = () => dispatch(setInfoActive(false));

    return (
        <div className='info'>
            <header className={`info-header info-header-${cls}`}>{icon}</header>
            <div className='info-content'>
                <span className={`info-content-title info-content-title-${cls}`}>
                    {title}
                </span>
                <span className='info-content-desc'>{desc}</span>
            </div>
            <footer className='info-footer'>
                <button
                    className='btn btn-info' type='button'
                    onClick={onClick}
                >
                    Понятно
                </button>
            </footer>
        </div>
    );
}
