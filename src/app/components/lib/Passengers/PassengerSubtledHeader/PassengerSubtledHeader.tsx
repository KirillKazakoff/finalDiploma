import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import useCheckStatus from '../../../../form/useCheckStatus';
import {
    setFormMsgHidden,
    selectFormsLength,
    addForm,
} from '../../../../redux/slices/passengersSlice';
import Form from '../../Common/Form';
import PassengerRemoveBtn from './PassengerRemoveBtn';
import SubtlePassengerFormBtn from './SubtlePassengerFormBtn';
import { useAppSelector, useAppDispatch } from '../../../../redux/reduxHooks';
import PassengerHeaderDesc from './PassengerHeaderDesc';
import { selectPlacesLengthArr } from '../../../../redux/slices/utils/selectPlacesLength';
import { messagesInfo } from '../../Common/Info/messagesInfo';
import { setInfo } from '../../../../redux/slices/infoSlice';

type Props = { children: React.ReactNode; index: number; id: string };

export default function PassengerSubtledHeader(props: Props) {
    const { children, index, id } = props;
    const [isActive, setActive] = useState(true);
    const onClick = () => setActive(!isActive);

    const dispatch = useAppDispatch();
    const statusValidity = useAppSelector((state) => state.passengers[id].statusValidity);
    const checkStatus = useCheckStatus(setFormMsgHidden, statusValidity, id);
    const placesAmount = useAppSelector(selectPlacesLengthArr);
    const formsLength = useAppSelector(selectFormsLength);

    const onSubmit = () => {
        if (!checkStatus()) return;

        if (formsLength < placesAmount.length) {
            dispatch(addForm(nanoid()));
            setActive(false);
        } else {
            dispatch(setInfo({ status: 'note', msg: messagesInfo.placesLimit }));
        }
    };

    return (
        <Form cls='passenger-form shadowed' onSubmitForm={onSubmit}>
            <header className='passenger-header framed-passengers'>
                <SubtlePassengerFormBtn onClick={onClick} isActive={isActive} />
                <PassengerHeaderDesc
                    id={id} index={index}
                    formStatus={statusValidity}
                />
                <PassengerRemoveBtn id={id} />
            </header>
            {isActive ? children : null}
        </Form>
    );
}
