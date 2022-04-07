import React, { useState } from 'react';
import useCheckStatus from '../../../../form/useCheckStatus';
import { setFormMsgHidden } from '../../../../redux/slices/passengersSlice';
import Form from '../../Common/Form';
import PassengerRemoveBtn from './PassengerRemoveBtn';
import SubtlePassengerFormBtn from './SubtlePassengerFormBtn';
import { useAppSelector } from '../../../../redux/reduxHooks';
import PassengerHeaderDesc from './PassengerHeaderDesc';

type Props = { children: React.ReactNode; index: number; id: string };

export default function SubtlePassengersForm(props: Props) {
    const { children, index, id } = props;
    const [isActive, setActive] = useState(true);
    const onClick = () => setActive(!isActive);

    const statusValidity = useAppSelector((state) => state.passengers[id].statusValidity);
    const checkStatus = useCheckStatus(setFormMsgHidden, statusValidity, id);

    const onSubmit = () => {
        checkStatus();
    };

    return (
        <Form cls='passenger-form shadowed' onSubmitForm={onSubmit}>
            <header className='passenger-header framed-passengers'>
                <SubtlePassengerFormBtn onClick={onClick} isActive={isActive} />
                <PassengerHeaderDesc
                    id={id} index={index}
                    formStatus={statusValidity}
                />
                <PassengerRemoveBtn />
            </header>
            {isActive ? children : null}
        </Form>
    );
}
