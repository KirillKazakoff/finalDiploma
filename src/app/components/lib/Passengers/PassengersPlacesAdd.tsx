import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { setInfo } from '../../../redux/slices/infoSlice';
import { messagesInfo } from '../Common/Info/messagesInfo';

export default function PassengersPlacesAdd() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const msg = messagesInfo.placesAdd;

    const onClick = () => {
        navigate('/places');
        dispatch(setInfo({ msg, status: 'note' }));
    };

    return (
        <header className='passenger-header framed-passengers shadowed'>
            <span className='passenger-desc'>Изменить количество мест</span>
            <button
                type='button' className='passenger-add'
                onClick={onClick}
            >
                <img
                    src='./svg/actions/plus.svg'
                    alt='plus'
                    width='100%'
                    height='100%'
                    className='passenger-add'
                />
            </button>
        </header>
    );
}
