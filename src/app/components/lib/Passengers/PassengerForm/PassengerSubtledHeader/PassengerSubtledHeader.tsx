import React, { useState } from 'react';
import useCheckStatus from '../../../../../form/useCheckStatus';
import { setFormMsgHidden } from '../../../../../redux/slices/passengersSlice';
import Form from '../../../Common/Form';
import PassengerRemoveBtn from './PassengerRemoveBtn';
import SubtlePassengerFormBtn from './SubtlePassengerFormBtn';
import { useAppSelector } from '../../../../../redux/reduxHooks';
import PassengerHeaderDesc from './PassengerHeaderDesc';
import { useAddPlacedPassenger } from '../../useAddForm';

type Props = { children: React.ReactNode; index: number; id: string };

export default function PassengerSubtledHeader(props: Props) {
    const { children, index, id } = props;
    const [isActive, setActive] = useState(false);
    const onClick = () => setActive(!isActive);

    const statusValidity = useAppSelector((state) => state.passengers[id].statusValidity);
    const checkStatus = useCheckStatus(setFormMsgHidden, statusValidity, id);
    const addForm = useAddPlacedPassenger();

    const onSubmit = () => {
        if (!checkStatus()) return;

        const checkRes = addForm();
        if (checkRes) setActive(false);
    };

    let headerCls = 'passenger-header framed-passengers';
    headerCls = statusValidity === 'success' ? `${headerCls} passenger-valid` : headerCls;

    return (
        <Form cls='passenger-form shadowed' onSubmitForm={onSubmit}>
            <header className={headerCls}>
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
